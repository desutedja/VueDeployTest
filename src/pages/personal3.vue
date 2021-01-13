<template>
  <div>
    <div>
      <b-form v-if="show" style="padding: 0 30px;">
        <b-form-group id="lblPurpose" class="formlabel" label="Tujuan Pembukaan Rekening" label-for="Purpose">
          <b-form-select
            id="Purpose"
            v-model="Purpose"
            :options="PurposeList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblFunds" class="formlabel" label="Sumber Dana" label-for="Funds">
          <b-form-select
            id="Funds"
            v-model="Funds"
            :options="FundsList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Pengalaman Investasi" v-slot="{ ariaDescribedby }">
          <b-form-radio v-model="InvestmentExperience" :aria-describedby="ariaDescribedby" name="InvestmentExperience" value="Yes">Ya</b-form-radio>
          <b-form-radio v-model="InvestmentExperience" :aria-describedby="ariaDescribedby" name="InvestmentExperience" value="No">Tidak</b-form-radio>
        </b-form-group>

        <b-form-group label="Apakah Anda memiliki anggota keluarga yang bekerja di BAPPEBTI/Bursa Berjangka/Kliring Berjangka?" v-slot="{ ariaDescribedby }">
          <b-form-radio v-model="terms1" :aria-describedby="ariaDescribedby" name="terms1" value="Yes">Ya</b-form-radio>
          <b-form-radio v-model="terms1" :aria-describedby="ariaDescribedby" name="terms1" value="No">Tidak</b-form-radio>
        </b-form-group>

        <b-form-group label="Apakah Anda telah dinyatakan Pailit oleh Pengadilan?" v-slot="{ ariaDescribedby }">
          <b-form-radio v-model="terms2" :aria-describedby="ariaDescribedby" name="terms2" value="Yes">Ya</b-form-radio>
          <b-form-radio v-model="terms2" :aria-describedby="ariaDescribedby" name="terms2" value="No">Tidak</b-form-radio>
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
    name: 'fourthStep',
    data () {
      return {
        PurposeList: [{ text: 'Pilih Salah Satu', value: null }, 'Hedging', 'Profit', 'Speculation', 'Lainnya'],
        FundsList: [{ text: 'Pilih Salah Satu', value: null }, 'Gaji', 'Hasil Usaha', 'Bonus', 'Pinjaman', 'Tabungan', 'Lainnya'],
        show: true
      }
    },
    components: {
      Navigation
    },
    computed: {
      Purpose: {
        get () { return this.$store.state.Purpose },
        set (value) { this.$store.commit('setPurpose', {Purpose: value}) }
      },
      Funds: {
        get () { return this.$store.state.Funds },
        set (value) { this.$store.commit('setFunds', {Funds: value}) }
      },
      InvestmentExperience: {
        get () { return this.$store.state.InvestmentExperience },
        set (value) { this.$store.commit('setInvestmentExperience', {InvestmentExperience: value}) }
      },
      terms1: {
        get () { return this.$store.state.terms1 },
        set (value) { this.$store.commit('setterms1', {terms1: value}) }
      },
      terms2: {
        get () { return this.$store.state.terms2 },
        set (value) { this.$store.commit('setterms2', {terms2: value}) }
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
