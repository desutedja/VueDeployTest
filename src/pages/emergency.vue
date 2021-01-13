<template>
  <div>
    <div>
      <b-form v-if="show" style="padding: 0 30px;">
        <b-form-group id="lblEmergencyName" class="formlabel" label="Nama" label-for="EmergencyName">
          <b-form-input
            type="text"
            id="EmergencyName"
            v-model="EmergencyName"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblEmergencyAddress" class="formlabel" label="Alamat" label-for="EmergencyAddress">
          <b-form-input
            type="text"
            id="EmergencyAddress"
            v-model="EmergencyAddress"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblEmergencyPos" class="formlabel" label="Kode Pos" label-for="EmergencyPos">
          <b-form-input
            type="number"
            id="EmergencyPos"
            v-model="EmergencyPos"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblEmergencyNumber" class="formlabel" label="No. Selular" label-for="EmergencyNumber">
          <b-form-input
            type="number"
            id="EmergencyNumber"
            v-model="EmergencyNumber"
            placeholder="No. HandPhone"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblEmergencyStatus" class="formlabel" label="Hubungan Dengan Anda" label-for="EmergencyStatus">
          <b-form-input
            type="text"
            id="EmergencyStatus"
            v-model="EmergencyStatus"
            required
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
      EmergencyName: {
        get () { return this.$store.state.EmergencyName },
        set (value) { this.$store.commit('setEmergencyName', {EmergencyName: value}) }
      },
      EmergencyAddress: {
        get () { return this.$store.state.EmergencyAddress },
        set (value) { this.$store.commit('setEmergencyAddress', {EmergencyAddress: value}) }
      },
      EmergencyPos: {
        get () { return this.$store.state.EmergencyPos },
        set (value) { this.$store.commit('setEmergencyPos', {EmergencyPos: value}) }
      },
      EmergencyNumber: {
        get () { return this.$store.state.EmergencyNumber },
        set (value) { this.$store.commit('setEmergencyNumber', {EmergencyNumber: value}) }
      },
      EmergencyStatus: {
        get () { return this.$store.state.EmergencyStatus },
        set (value) { this.$store.commit('setEmergencyStatus', {EmergencyStatus: value}) }
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
