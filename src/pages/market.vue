<template>
  <div>
    <div>
      <VueTradingView />
    </div>
  </div>
</template>

<script>
  import VueTradingView from 'vue-trading-view'

  export default {
    name: 'market',
    components: {
      VueTradingView
    }
  }
</script>

<style>
@media only screen and (max-width: 600px) {
  .formlabel{
    text-align:left;
  }
}
</style>
