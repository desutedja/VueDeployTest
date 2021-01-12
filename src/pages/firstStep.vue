<template>
  <div>
    <div>
      <b-form v-if="show" style="padding: 0 30px;">
        <b-form-group id="lblAccountType" class="formlabel" label="Pilih Tipe Akun:" label-for="AccountType">
          <b-form-select
            id="AccountType"
            v-model="AccountType"
            :options="AccountTypeList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblCurrency" class="formlabel" label="Sumber Dana Anda:" label-for="Curency">
          <b-form-select
            id="Currency"
            v-model="Currency"
            :options="CurrencyList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblDeposit" class="formlabel" label="Estimasi Deposi Awal:" label-for="Deposit">
          <b-form-input
            type="number"
            id="Deposit"
            v-model="Deposit"
            placeholder=""
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblBirthday" class="formlabel" label="Tanggal Lahir:" label-for="Birthday">
          <Datepicker name="Birthday" id="Birthday" v-model="Birthday"></Datepicker>
        </b-form-group>
        <!--b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group-->

        <b-form-group id="input-group-4" class="formlabel" v-slot="{ ariaDescribedby }" label="Apakah Anda Sudah Memiliki Akun Sebelumnya?" label-for="IsAccount">
          <b-form-checkbox-group
            v-model="checked"
            id="IsAccount"
            class="formlabel"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="yes">Ya</b-form-checkbox>
            <b-form-checkbox value="no">Tidak</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-form-group id="lblPassword" class="formlabel" label="Password Akun Live" label-for="Password" description="Password Khusus Untuk Mengakses Akun Live">
          <b-form-input
            id="Password"
            v-model="Password"
            type="password"
            placeholder="Masukan Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblPassword2" class="formlabel" label="Tulis Ulang Password Akun Live" label-for="Password2">
          <b-form-input
            id="Password2"
            v-model="Password2"
            type="password"
            placeholder="Masukan Ulang Password Anda"
            required
          ></b-form-input>
        </b-form-group>

      </b-form>
      <!--b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card-->
    </div>
    <div>
      <navigation></navigation>
    </div>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue'
  import Datepicker from 'vuejs-datepicker'

  export default {
    name: 'firstStep',
    data () {
      return {
        AccountTypeList: [{ text: 'Pilih Akun', value: null }, 'Standart', 'Lain-lain'],
        CurrencyList: [{ text: 'Pilih Sumber Dana', value: null }, 'IDR', 'USD'],
        show: true
      }
    },
    components: {
      Datepicker,
      Navigation
    },
    computed: {
      AccountType: {
        get () {
          return this.$store.state.AccountType
        },
        set (value) {
          this.$store.commit('setAccountType', {AccountType: value})
        }
      },
      Currency: {
        get () {
          return this.$store.state.Currency
        },
        set (value) {
          this.$store.commit('setCurrency', {Currency: value})
        }
      },
      Deposit: {
        get () {
          return this.$store.state.Deposit
        },
        set (value) {
          this.$store.commit('setDeposit', {Deposit: value})
        }
      },
      Birthday: {
        get () {
          return this.$store.state.Birthday
        },
        set (value) {
          this.$store.commit('setBirthday', {Birthday: value})
        }
      },
      Password: {
        get () {
          return this.$store.state.Password
        },
        set (value) {
          this.$store.commit('setPassword', {Password: value})
        }
      },
      Password2: {
        get () {
          return this.$store.state.Password2
        },
        set (value) {
          this.$store.commit('setPassword2', {Password2: value})
        }
      },
      checked: {
        get () {
          return this.$store.state.checked
        },
        set (value) {
          this.$store.commit('setchecked', {checked: value})
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
