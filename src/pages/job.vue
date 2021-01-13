<template>
  <div>
    <div>
      <b-form v-if="show" style="padding: 0 30px;">
        <b-form-group id="lblJob" class="formlabel" label="Pekerjaan" label-for="Job">
          <b-form-select
            id="Job"
            v-model="Job"
            :options="JobList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblSalary" class="formlabel" label="Penhasilan Pertahun" label-for="Salary">
          <b-form-select
            id="Salary"
            v-model="Salary"
            :options="SalaryList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblCompany" class="formlabel" label="Nama Perusahaan" label-for="Company">
          <b-form-input
            type="text"
            id="Company"
            v-model="Company"
            placeholder="masukan Nama Perusahaan Anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblBusinessField" class="formlabel" label="Bidang Usaha" label-for="BusinessField">
          <b-form-input
            type="text"
            id="BusinessField"
            v-model="BusinessField"
            placeholder="masukan Bidang Usaha Anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblPosition" class="formlabel" label="Jabatan" label-for="Position">
          <b-form-input
            type="text"
            id="Position"
            v-model="Position"
            placeholder="masukan Jabatan Anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblExperience" class="formlabel" label="Lama Bekerja" label-for="Experience">
          <b-form-input
            type="text"
            id="Experience"
            v-model="Experience"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblExperience2" class="formlabel" label="Lama Bekerja Di Perusahaan sebelumnya" label-for="Experience2">
          <b-form-input
            type="text"
            id="Experience2"
            v-model="Experience2"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblCompanyAddress" class="formlabel" label="Alamat Kantor" label-for="CompanyAddress">
          <b-form-input
            type="text"
            id="CompanyAddress"
            v-model="CompanyAddress"
            placeholder="masukan Alamat Kantor Anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblCompanyPosCode" class="formlabel" label="Kode Pos Kantor" label-for="CompanyPosCode">
          <b-form-input
            type="text"
            id="CompanyPosCode"
            v-model="CompanyPosCode"
            placeholder="masukan Kode Pos Kantor Anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblCompanyPhoneNo" class="formlabel" label="Nomor Telepon Kantor" label-for="CompanyPhoneNo">
          <b-form-input
            type="text"
            id="CompanyPhoneNo"
            v-model="CompanyPhoneNo"
            placeholder="masukan nomor telepon kantor anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblCompanyFaxNo" class="formlabel" label="Nomor Faksimili Kantor" label-for="CompanyFaxNo">
          <b-form-input
            type="text"
            id="CompanyFaxNo"
            v-model="CompanyFaxNo"
            placeholder="masukan nomor faksimili kantor"
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
    name: 'jobdetail',
    data () {
      return {
        JobList: [{ text: 'Pilih Salah Satu', value: null }, 'Karyawan Swasta', 'Pegawai Negri', 'Wirausaha', 'Lainnya'],
        SalaryList: [{ text: 'Pilih Salah Satu', value: null }, 'Dibawah 100 Juta', 'Antara 100 - 250 Juta', 'Antara 250 - 500 Juta', 'Diatas 500 Juta'],
        show: true
      }
    },
    components: {
      Navigation
    },
    computed: {
      Job: {
        get () { return this.$store.state.Job },
        set (value) { this.$store.commit('setJob', {Job: value}) }
      },
      Salary: {
        get () { return this.$store.state.Salary },
        set (value) { this.$store.commit('setSalary', {Salary: value}) }
      },
      Company: {
        get () { return this.$store.state.Company },
        set (value) { this.$store.commit('setCompany', {Company: value}) }
      },
      BusinessField: {
        get () { return this.$store.state.BusinessField },
        set (value) { this.$store.commit('setBusinessField', {BusinessField: value}) }
      },
      Position: {
        get () { return this.$store.state.Position },
        set (value) { this.$store.commit('setPosition', {Position: value}) }
      },
      Experience: {
        get () { return this.$store.state.Experience },
        set (value) { this.$store.commit('setExperience', {Experience: value}) }
      },
      Experience2: {
        get () { return this.$store.state.Experience2 },
        set (value) { this.$store.commit('setExperience2', {Experience2: value}) }
      },
      CompanyAddress: {
        get () { return this.$store.state.CompanyAddress },
        set (value) { this.$store.commit('setCompanyAddress', {CompanyAddress: value}) }
      },
      CompanyPosCode: {
        get () { return this.$store.state.CompanyPosCode },
        set (value) { this.$store.commit('setCompanyPosCode', {CompanyPosCode: value}) }
      },
      CompanyPhoneNo: {
        get () { return this.$store.state.CompanyPhoneNo },
        set (value) { this.$store.commit('setCompanyPhoneNo', {CompanyPhoneNo: value}) }
      },
      CompanyFaxNo: {
        get () { return this.$store.state.CompanyFaxNo },
        set (value) { this.$store.commit('setCompanyFaxNo', {CompanyFaxNo: value}) }
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
