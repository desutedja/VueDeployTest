<template>
    <div>
        <div>
            <div style="width: 86%;float: left;border: 1px solid white;">
              <trading-vue 
                title-txt="GBPUSD"
                :data="chart"
                :width="this.width"
                :height="this.height"
                :toolbar="true">
              </trading-vue>
            </div>
            <div class="rightPanel">
              <div style="position: absolute;bottom: 5%;right: 0;width: 14%;">
                <b-btn id="portofolio" @click="openSidebar">
                  Portofolio
                </b-btn>
                <div class="text">
                  <input type="number" v-model="BetAmount" placeholder="$1" required />
                </div>
                <button style="margin:3px 0;" @click="OrderBuy"><img src="../assets/btnbuy1.png" /></button>
                <button @click="OrderSell"><img src="../assets/btnsell1.png" /></button>
              </div>
            </div>
            
            <b-sidebar v-model="isSidebarOpen" right>
              <div v-for="dataPortofolios in dataPortofolio" :key="dataPortofolios.id">
                <div class="positions">
                  <div class="symbol">{{ dataPortofolios.symbol }}</div>
                  <div class="ids">{{ dataPortofolios.id }}</div>
                  <div>
                    <div class="halfleft">{{ dataPortofolios.side }}</div>
                    <div class="halfright">${{ dataPortofolios.amount }}</div>
                  </div>
                  <div>
                    <div class="halfleft">{{ dataPortofolios.create_at }}</div>
                    <div class="halfright1">at level {{ dataPortofolios.priceat }}</div>
                  </div>
                  <div class="closepos"><button @click="closePosition(dataPortofolios.id)">STOP</button></div>
                </div>
              </div>
            </b-sidebar>
        </div>
        <b-modal id="modalInvoice" size="sm" :title="OrderTitle" v-model="show">
          {{ OrderResponse }}
          <div slot="modal-footer" class="w-30"> 
              <b-btn size="sm" class="float-right" variant="warning" @click="show=false">
                  <i class="fa fa-print"></i> Print
              </b-btn>
          </div>
      </b-modal>
    </div>
</template>

<script>
import {TradingVue, DataCube} from 'trading-vue-js'
import Data from '../../data/data.json'
import axios from 'axios'

export default {
  name: 'trade',
  components: { TradingVue },
  methods: {
    openSidebar () {
      this.isSidebarOpen = true
    },
    onResize () {
      this.width = window.innerWidth * 0.85
      this.height = window.innerHeight * 0.95
    },
    getPortofolio () {
      axios.get('http://165.232.175.151:5000/history').then(response => {
        this.dataPortofolio = response.data.orders
        console.log(this.dataPortofolio)
      })
        .catch(error => {
          console.log(error)
        })
    },
    closePosition (param) {
      const json = JSON.stringify({ orderID: param })
      axios.post('http://165.232.175.151:5000/trade/close', json, {headers: {'Content-Type': 'application/json'}}).then(response => {
        // console.log(response.data)
        if (response.data) {
          this.getPortofolio()
          this.isSidebarOpen = false

          this.OrderTitle = 'Success'
          this.OrderResponse = 'Close Order Success'
        } else {
          this.OrderTitle = 'Failed'
          this.OrderResponse = 'Close Order  Failed'
        }

        this.show = true
      })
        .catch(error => {
          console.log(error)
        })
    },
    pollGet () {
      setInterval(() => {
        axios.get('http://165.232.175.151:5000/').then(response => {
          console.log(response.data)
          this.chart = new DataCube(response.data)
          // this.info = response.data.bpi
        })
          .catch(error => {
            console.log(error)
            // this.errored = true
          })
          .finally(() => { this.loading = false })
      }, 3000)
    },
    OrderBuy () {
      const json = JSON.stringify({ side: 'buy', amount: this.BetAmount })
      axios.post('http://165.232.175.151:5000/trade', json, {headers: {'Content-Type': 'application/json'}}).then(response => {
        if (response.data.status) {
          this.OrderTitle = 'Buy Order Success'
          this.OrderResponse = 'Your Order ID is : ' + response.data.order_id
        } else {
          this.OrderTitle = 'Buy Order Failed'
          this.OrderResponse = 'Failed'
        }
        console.log('status: ' + response.data.status)
        this.show = true
      })
        .catch(error => {
          console.log(error)
        })
    },
    OrderSell () {
      const json = JSON.stringify({ side: 'sell', amount: this.BetAmount })
      axios.post('http://165.232.175.151:5000/trade', json, {headers: {'Content-Type': 'application/json'}}).then(response => {
        if (response.data.status) {
          this.OrderTitle = 'Sell Order Success'
          this.OrderResponse = 'Your Order ID is : ' + response.data.order_id
        } else {
          this.OrderTitle = 'Sell Order Failed'
          this.OrderResponse = 'Failed'
        }
        console.log('status: ' + response.data.status)
        this.show = true
      })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
  },
  created () {
    this.pollGet()
    this.getPortofolio()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  data () {
    return {
      isSidebarOpen: false,
      dataPortofolio: null,
      show: false,
      OrderTitle: '',
      OrderResponse: '',
      chart: new DataCube(Data),
      width: window.innerWidth * 0.85,
      height: window.innerHeight * 0.95,
      colors: {
        colorBack: '#fff',
        colorGrid: '#eee',
        colorText: '#333'
      }
    }
  },
  computed: {
    BetAmount: {
      get () {
        return this.$store.state.BetAmount
      },
      set (value) {
        this.$store.commit('setBetAmount', {BetAmount: value})
      }
    }
  }
}
</script>

<style>
.b-sidebar-header > button{
  color: white !important;
}
#portofolio{
  width: 70px;
  font-size: 11px;
  margin: 5px;
  background: orange;
}

.positions{
  margin: 10px 0;
  width: 100%;
  padding: 5px;
  background: #101219;
}

.halfleft{
  width:49%;
  float:left;
}

.halfright{
  width:49%;
  float:right;
}

.halfright1{
  width:50%;
  float:right;
}

.closepos{
  width: 100%;
  text-align: center;
  overflow: auto;
}

.ids{
  font-size:10px;
}

div.text{
position:relative;
}

div.text input{
  width:75%;
  padding: 4px 0px 8px 18px;
}

/* div.text:after{
position: absolute;
    left: 30px;
    top: 6px;
    content: '$';
} */

.rightPanel{
  position:relative;
  height: 100vh;
}
body{
  background:#121826;
}
footer{
    display:none !important;
}
#app > div:first-child {
  display:none !important;
}
marquee{
  display:none;
}
main{
  margin-top:0px;
}
@media only screen and (max-width: 640px) {
  .rightPanel > div > button > img{
    width: 50px;
  }

  /* div.text:after{
    left: 20px;
  } */
}
</style>

