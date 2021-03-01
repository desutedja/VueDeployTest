<template>
    <div>
        <div>
            <trading-vue :data="chart" :width="this.width" :height="this.height"
                :color-back="black"
                :color-grid="colors.colorGrid"
                :color-text="colors.colorText">
            </trading-vue>
        </div>
        <div id="btnOrder">
            <button @click="OrderSell" style="background-color: red;">
                SELL
            </button>

            <button @click="OrderBuy" style="background-color: green;">
                BUY
            </button>
        </div>
    </div>
</template>

<script>
import TradingVue from 'trading-vue-js'
import Data from '../../data/data.json'
import axios from 'axios'

export default {
  name: 'app',
  components: { TradingVue },
  methods: {
    onResize (event) {
      this.width = window.innerWidth
      this.height = window.innerHeight
    },
    pollGet () {
      setInterval(() => {
        axios.get('http://127.0.0.1:5000/').then(response => {
          console.log(response.data)
          this.chart = response.data
          // this.info = response.data.bpi
        })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => { this.loading = false })
      }, 3000)
    },
    OrderBuy () {
      const json = JSON.stringify({ side: 'buy' })
      axios.post('http://127.0.0.1:5000/trade', json, {headers: {'Content-Type': 'application/json'}}).then(response => {
        console.log(response.data)
      })
    },
    OrderSell () {
      const json = JSON.stringify({ side: 'sell' })
      axios.post('http://127.0.0.1:5000/trade', json, {headers: {'Content-Type': 'application/json'}}).then(response => {
        console.log(response.data)
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
      chart: Data,
      width: window.innerWidth,
      height: window.innerHeight,
      colors: {
        colorBack: '#fff',
        colorGrid: '#eee',
        colorText: '#333'
      }
    }
  }
}
</script>

<style>
#btnOrder{
    position: fixed;
    bottom: 0;
    width: 100%;
}
#btnOrder > btn{
    width: 45%;
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
</style>

