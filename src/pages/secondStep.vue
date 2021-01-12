<template>
  <div>
    <div>
      <b-form v-if="show" style="padding: 0 30px;">
        <b-form-group id="lblBankName" class="formlabel" label="Pilih Bank Akun Anda:" label-for="BankName">
          <b-form-select
            id="BankName"
            v-model="BankName"
            :options="BankNameList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblAccountName" class="formlabel" label="Nama Rekeing" label-for="AccountName">
          <b-form-input
            type="text"
            id="AccountName"
            v-model="AccountName"
            placeholder="masukan nama akun bank anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblBranchName" class="formlabel" label="Nama Cabang" label-for="BranchName">
          <b-form-input
            type="text"
            id="BranchName"
            v-model="BranchName"
            placeholder="masukan cabang bank anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblAccountNo" class="formlabel" label="Nomor Rekening" label-for="AccountNo">
          <b-form-input
            type="text"
            id="AccountNo"
            v-model="AccountNo"
            placeholder="masukan nomor rekening anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblPhoneNumber" class="formlabel" label="Nomor Telepon" label-for="PhoneNumber">
          <b-form-input
            type="text"
            id="PhoneNumber"
            v-model="PhoneNumber"
            placeholder="masukan nomor telepon anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblSavingType" class="formlabel" label="Jenis Tabungan:" label-for="SavingType">
          <b-form-select
            id="SavingType"
            v-model="SavingType"
            :options="SavingTypeList"
            required
          ></b-form-select>
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
    data () {
      return {
        BankNameList: [{ text: 'Pilih Bank', value: null }, 'BCA', 'BRI', 'Mandiri', 'BNI'],
        SavingTypeList: [{text: 'Pilih Jenis Rekening', value: null}, 'Tabungan', 'Lain-lain'],
        show: true
      }
    },
    components: {
      Navigation
    },
    computed: {
      BankName: {
        get () {
          return this.$store.state.BankName
        },
        set (value) {
          this.$store.commit('setBankName', {BankName: value})
        }
      },
      AccountName: {
        get () {
          return this.$store.state.AccountName
        },
        set (value) {
          this.$store.commit('setAccountName', {AccountName: value})
        }
      },
      BranchName: {
        get () {
          return this.$store.state.BranchName
        },
        set (value) {
          this.$store.commit('setBranchName', {BranchName: value})
        }
      },
      AccountNo: {
        get () {
          return this.$store.state.AccountNo
        },
        set (value) {
          this.$store.commit('setAccountNo', {AccountNo: value})
        }
      },
      PhoneNumber: {
        get () {
          return this.$store.state.PhoneNumber
        },
        set (value) {
          this.$store.commit('setPhoneNumber', {PhoneNumber: value})
        }
      },
      SavingType: {
        get () {
          return this.$store.state.SavingType
        },
        set (value) {
          this.$store.commit('setSavingType', {SavingType: value})
        }
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
