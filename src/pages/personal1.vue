<template>
  <div>
    <div>
      <b-form v-if="show" style="padding: 0 30px;">
        <b-form-group id="lblName" class="formlabel" label="Nama Lengkap" label-for="FullName">
          <b-form-input
            id="FullName"
            v-model="FullName"
            type="text"
            placeholder="Masukan Nama Lengkap Anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblDateOfBirth" class="formlabel" label="Tanggal Lahir:" label-for="DateOfBirth">
          <Datepicker name="DateOfBirth" id="DateOfBirth" v-model="DateOfBirth"></Datepicker>
        </b-form-group>

        <b-form-group id="lblTypeOfIdentity" class="formlabel" label="Jenis Identitas KTP/SIM/PASPOR" label-for="TypeOfIdentity">
          <b-form-select
            id="TypeOfIdentity"
            v-model="TypeOfIdentity"
            :options="TypeOfIdentityList"
            required
          ></b-form-select>
        </b-form-group>

       <b-form-group id="lblIdentityNo" class="formlabel" label="Nomor Identitas KTP/SIM/PASPOR" label-for="IdentityNo">
          <b-form-input
            id="IdentityNo"
            v-model="IdentityNo"
            type="text"
            placeholder="Masukan Nomor Identitas Anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblSex" class="formlabel" label="Jenis Kelamin" label-for="Sex">
          <b-form-select
            id="Sex"
            v-model="Sex"
            :options="SexList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="lblMotherName" class="formlabel" label="Nama Ibu Kandung" label-for="MotherName">
          <b-form-input
            id="MotherName"
            v-model="MotherName"
            type="text"
            placeholder="Masukan Nama Ibu Kandung Anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="lblStatus" class="formlabel" label="Status Perkawinan" label-for="Status">
          <b-form-select
            id="Status"
            v-model="Status"
            :options="StatusList"
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
  import Datepicker from 'vuejs-datepicker'

  export default {
    name: 'thirdStep',
    data () {
      return {
        TypeOfIdentityList: [{ text: 'Pilih Jenis Identitas', value: null }, 'KTP', 'SIM', 'PASPOR'],
        SexList: [{ text: 'Pilih -', value: null }, 'Pria', 'Wanita'],
        StatusList: [{ text: 'Pilih Satu', value: null }, 'Belum Menikah', 'Menikah', 'Cerai'],
        show: true
      }
    },
    components: {
      Datepicker,
      Navigation
    },
    computed: {
      FullName: {
        get () {
          return this.$store.state.FullName
        },
        set (value) {
          this.$store.commit('setFullName', {FullName: value})
        }
      },
      DateOfBirth: {
        get () {
          return this.$store.state.DateOfBirth
        },
        set (value) {
          this.$store.commit('setDateOfBirth', {DateOfBirth: value})
        }
      },
      TypeOfIdentity: {
        get () {
          return this.$store.state.TypeOfIdentity
        },
        set (value) {
          this.$store.commit('setTypeOfIdentity', {TypeOfIdentity: value})
        }
      },
      IdentityNo: {
        get () {
          return this.$store.state.IdentityNo
        },
        set (value) {
          this.$store.commit('setIdentityNo', {IdentityNo: value})
        }
      },
      Sex: {
        get () {
          return this.$store.state.Sex
        },
        set (value) {
          this.$store.commit('setSex', {Sex: value})
        }
      },
      MotherName: {
        get () {
          return this.$store.state.MotherName
        },
        set (value) {
          this.$store.commit('setMotherName', {MotherName: value})
        }
      },
      Status: {
        get () {
          return this.$store.state.Status
        },
        set (value) {
          this.$store.commit('setStatus', {Status: value})
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
