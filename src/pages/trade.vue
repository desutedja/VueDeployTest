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
                <div class="text">
                  <input type="number" v-model="BetAmount" placeholder="1" required />
                </div>
                <button style="margin:3px 0;" @click="OrderBuy"><img src="../assets/btnbuy1.png" /></button>
                <button @click="OrderSell"><img src="../assets/btnsell1.png" /></button>
              </div>
            </div>
        </div>
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
    onResize () {
      this.width = window.innerWidth * 0.85
      this.height = window.innerHeight * 0.95
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
        console.log(response.data)
      })
        .catch(error => {
          console.log(error)
        })
    },
    OrderSell () {
      const json = JSON.stringify({ side: 'sell', amount: this.BetAmount })
      axios.post('http://165.232.175.151:5000/trade', json, {headers: {'Content-Type': 'application/json'}}).then(response => {
        console.log(response.data)
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
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  data () {
    return {
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
div.text{
position:relative;
}

div.text input{
  width:75%;
  padding: 4px 0px 8px 18px;
}

div.text:after{
position: absolute;
    left: 30px;
    top: 6px;
    content: '$';
}

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

  div.text:after{
    left: 20px;
  }
}
</style>

