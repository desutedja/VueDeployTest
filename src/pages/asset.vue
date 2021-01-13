<template>
  <div>
    <div>
      <b-form v-if="show" style="padding: 0 30px;">
        <b-form-group id="lblHomeLocation" class="formlabel" label="Lokasi Rumah" label-for="HomeLocation">
          <b-form-input
            type="text"
            id="HomeLocation"
            v-model="HomeLocation"
            placeholder="masukan Lokasi Rumah Anda"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblHomeValue" class="formlabel" label="Nilai NJOP Rumah" label-for="HomeValue">
          <b-form-input
            type="number"
            id="HomeValue"
            v-model="HomeValue"
            placeholder="0"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblDeposito" class="formlabel" label="Deposito Bank" label-for="Deposito">
          <b-form-input
            type="number"
            id="Deposito"
            v-model="Deposito"
            placeholder="0"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblTotal" class="formlabel" label="Jumlah" label-for="Total">
          <b-form-input
            type="number"
            id="Total"
            v-model="Total"
            placeholder="0"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblOtherAssets" class="formlabel" label="Asset Lainnya" label-for="OtherAssets">
          <b-form-input
            type="number"
            id="OtherAssets"
            v-model="OtherAssets"
            placeholder="0"
          ></b-form-input>
        </b-form-group>

      </b-form>
    </div>
    <div>
      <navigation></navigation>
    </div>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue'

  export default {
    name: 'asset',
    data () {
      return {
        show: true
      }
    },
    components: {
      Navigation
    },
    computed: {
      HomeLocation: {
        get () { return this.$store.state.HomeLocation },
        set (value) { this.$store.commit('setHomeLocation', {HomeLocation: value}) }
      },
      HomeValue: {
        get () { return this.$store.state.HomeValue },
        set (value) { this.$store.commit('setHomeValue', {HomeValue: value}) }
      },
      Deposito: {
        get () { return this.$store.state.Deposito },
        set (value) { this.$store.commit('setDeposito', {Deposito: value}) }
      },
      Total: {
        get () { return this.$store.state.Total },
        set (value) { this.$store.commit('setTotal', {Total: value}) }
      },
      OtherAssets: {
        get () { return this.$store.state.OtherAssets },
        set (value) { this.$store.commit('setOtherAssets', {OtherAssets: value}) }
      }
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
