<template>
  <div>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" style="padding: 0 30px;">
        <b-form-group id="lblAccountType" class="formlabel" label="Pilih Tipe Akun:" label-for="AccountType">
          <b-form-select
            id="AccountType"
            v-model="form.AccountType"
            :options="AccountType"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblCurrency" class="formlabel" label="Sumber Dana Anda:" label-for="Curency">
          <b-form-select
            id="Currency"
            v-model="form.Currency"
            :options="Currency"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblDeposit" class="formlabel" label="Estimasi Deposi Awal:" label-for="Deposit">
          <b-form-input
            type="number"
            id="Deposit"
            v-model="form.Deposit"
            placeholder=""
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblBirthday" class="formlabel" label="Tanggal Lahir:" label-for="Birthday">
          <Datepicker></Datepicker>
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
            v-model="form.checked"
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
            v-model="form.Password"
            type="password"
            placeholder="Masukan Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblPassword2" class="formlabel" label="Tulis Ulang Password Akun Live" label-for="Password2">
          <b-form-input
            id="Password2"
            v-model="form.Password2"
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
      <b-button type="button" variant="primary">Lanjut</b-button>
    </div>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'

  export default {
    data () {
      return {
        form: {
          AccountType: null,
          Currency: null,
          Deposit: '',
          Password: '',
          Password2: '',
          checked: []
        },
        AccountType: [{ text: 'Pilih Tipe Akun', value: null }, 'Standart', 'Pro', 'Raw Spread'],
        Currency: [{text: 'Pilih Sumber Dana Anda', value: null}, 'IDR', 'USD', 'Raw Spread'],
        show: true
      }
    },
    methods: {
      onSubmit (event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset (event) {
        event.preventDefault()
        // Reset our form values
        this.form.AccountType = null
        this.form.Currency = null
        this.form.Deposit = ''
        this.form.Password = ''
        this.form.Password2 = ''
        this.form.checked = []

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    components: {
      Datepicker
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
