<template>
  <div>
    <div>
      <b-form v-if="show" style="padding: 0 30px;">
        <b-form-group id="lblAddress" class="formlabel" label="Alamat Domisili" label-for="Address">
          <b-form-input
            id="Address"
            v-model="Address"
            type="text"
            placeholder="Masukan Alamat Anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblCountry" class="formlabel" label="Negara Domisili" label-for="Country">
          <b-form-select
            @change="onChangeCountry"
            id="Country"
            v-model="Country"
            :options="CountryList"
            required
          ></b-form-select>
        </b-form-group>

       <b-form-group id="lblProvince" class="formlabel" label="Provinsi Domisili" label-for="Province">
          <b-form-select
            @change="onChangeProvince"
            id="Province"
            v-model="Province"
            :options="ProvinceList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblDistrict" class="formlabel" label="Kota/Kabupaten Domisili" label-for="District">
          <b-form-select
            @change="onChangeDistrict"
            id="District"
            v-model="District"
            :options="DistrictList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblSubDistrict" class="formlabel" label="Kecamatan Domisili" label-for="SubDistrict">
          <b-form-select
            @change="onChangeSubDistrict"
            id="SubDistrict"
            v-model="SubDistrict"
            :options="SubDistrictList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblVillage" class="formlabel" label="Kelurahan Domisili" label-for="Village">
          <b-form-select
            id="Village"
            v-model="Village"
            :options="VillageList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblPostalCode" class="formlabel" label="Kode POS Domisili" label-for="PostalCode">
          <b-form-input
            id="PostalCode"
            v-model="PostalCode"
            type="text"
            placeholder="Masukan Kode POS"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblPhoneNo" class="formlabel" label="Nomor Telepon Rumah" label-for="PhoneNo">
          <b-form-input
            type="text"
            id="PhoneNo"
            v-model="PhoneNo"
            placeholder="masukan nomor telepon rumah anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblFaxNo" class="formlabel" label="Nomor Faksimili Rumah" label-for="FaxNo">
          <b-form-input
            type="text"
            id="FaxNo"
            v-model="FaxNo"
            placeholder="masukan nomor fak rumah anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblSmartPhoneNo" class="formlabel" label="No. Selular" label-for="SmartPhoneNo">
          <b-form-input
            type="text"
            id="SmartPhoneNo"
            v-model="SmartPhoneNo"
            placeholder="masukan No. Handphone anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblHome" class="formlabel" label="Status Kepemilikan Rumah" label-for="Home">
          <b-form-select
            id="Home"
            v-model="Home"
            :options="HomeList"
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
  import axios from 'axios'

  export default {
    name: 'fourthStep',
    data () {
      return {
        CountryList: [{ text: 'Pilih Negara Domisili', value: null }, 'Indonesia'],
        ProvinceList: [{ text: 'Pilih Provinsi Domisili', value: 0 }],
        DistrictList: [{ text: 'Pilih Kota/Kabupaten Domisili', value: 0 }],
        SubDistrictList: [{ text: 'Pilih Kecamatan Domisili', value: 0 }],
        VillageList: [{ text: 'Pilih Kelurahan Domisili', value: 0 }],
        HomeList: [{ text: 'Pilih Salah Satu', value: null }, 'Pribadi', 'Keluarga', 'Sewa', 'Lainnya'],
        show: true
      }
    },
    mounted: function () {
      // method1 will execute at pageload
      // TODO : List lebih baik disimpan di store jika sudah pernah di load, jadi tidak perlu load ulang dari API
      // jadi bisa menghemat waktu load dan bandwidth
      if (this.Country !== null) { this.onChangeCountry() }
      if (this.Country !== null) { this.onChangeProvince() }
      if (this.Country !== null) { this.onChangeDistrict() }
      if (this.Country !== null) { this.onChangeSubDistrict() }
    },
    methods: {
      onChangeCountry: function (event) {
        axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
          .then(response => {
            this.ProvinceList = response.data.provinsi.map(provinsi => ({value: provinsi.id, text: provinsi.nama}))
            this.ProvinceList.push({text: 'Pilih Provinsi Domisili', value: 0})
            this.ProvinceList.sort((a, b) => (a.value > b.value) ? 1 : -1)
          })
          .catch(error => {
            this.errorMessage = error.message
            console.error('There was an error!', error)
          })
      },
      onChangeProvince: function (event) {
        console.log(this.Province)
        axios.get('https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=' + this.Province)
          .then(response => {
            this.DistrictList = response.data.kota_kabupaten.map(kotakabupaten => ({value: kotakabupaten.id, text: kotakabupaten.nama}))
            this.DistrictList.push({text: 'Pilih Kota/Kabupaten Domisili', value: 0})
            this.DistrictList.sort((a, b) => (a.value > b.value) ? 1 : -1)
          })
          .catch(error => {
            this.errorMessage = error.message
            console.error('There was an error!', error)
          })
      },
      onChangeDistrict: function (event) {
        console.log(this.District)
        axios.get('https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=' + this.District)
          .then(response => {
            this.SubDistrictList = response.data.kecamatan.map(kecamatan => ({value: kecamatan.id, text: kecamatan.nama}))
            this.SubDistrictList.push({text: 'Pilih Kecamatan Domisili', value: 0})
            this.SubDistrictList.sort((a, b) => (a.value > b.value) ? 1 : -1)
          })
          .catch(error => {
            this.errorMessage = error.message
            console.error('There was an error!', error)
          })
      },
      onChangeSubDistrict: function (event) {
        console.log(this.SubDistrict)
        axios.get('https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=' + this.SubDistrict)
          .then(response => {
            this.VillageList = response.data.kelurahan.map(kelurahan => ({value: kelurahan.id, text: kelurahan.nama}))
            this.VillageList.push({text: 'Pilih kelurahan Domisili', value: 0})
            this.VillageList.sort((a, b) => (a.value > b.value) ? 1 : -1)
          })
          .catch(error => {
            this.errorMessage = error.message
            console.error('There was an error!', error)
          })
      }
    },
    components: {
      Navigation
    },
    computed: {
      Address: {
        get () { return this.$store.state.Address },
        set (value) { this.$store.commit('setAddress', {Address: value}) }
      },
      Country: {
        get () { return this.$store.state.Country },
        set (value) { this.$store.commit('setCountry', {Country: value}) }
      },
      Province: {
        get () { return this.$store.state.Province },
        set (value) { this.$store.commit('setProvince', {Province: value}) }
      },
      District: {
        get () { return this.$store.state.District },
        set (value) { this.$store.commit('setDistrict', {District: value}) }
      },
      SubDistrict: {
        get () { return this.$store.state.SubDistrict },
        set (value) { this.$store.commit('setSubDistrict', {SubDistrict: value}) }
      },
      Village: {
        get () { return this.$store.state.Village },
        set (value) { this.$store.commit('setVillage', {Village: value}) } },
      PostalCode: {
        get () { return this.$store.state.PostalCode },
        set (value) { this.$store.commit('setPostalCode', {PostalCode: value}) }
      },
      PhoneNo: {
        get () { return this.$store.state.PhoneNo },
        set (value) { this.$store.commit('setPhoneNo', {PhoneNo: value}) }
      },
      FaxNo: {
        get () { return this.$store.state.FaxNo },
        set (value) { this.$store.commit('setFaxNo', {FaxNo: value}) }
      },
      SmartPhoneNo: {
        get () { return this.$store.state.SmartPhoneNo },
        set (value) { this.$store.commit('setSmartPhoneNo', {SmartPhoneNo: value}) }
      },
      Home: {
        get () { return this.$store.state.Home },
        set (value) { this.$store.commit('setHome', {Home: value}) }
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
