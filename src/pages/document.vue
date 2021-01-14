<template>
  <div>
    <div>
      <b-form v-if="show" style="padding: 0 30px;">
        <b-form-group id="lblSelfieWithID" class="formlabel" label="Foto Diri Memegang Identitas" label-for="SelfieWithID">
          <b-form-file
            @change="onFileChange"
            v-model="SelfieWithID"
            :state="Boolean(SelfieWithID)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            id="SelfieWithID"
            ref="fileInput"
          ></b-form-file>
          <div class="imgContainer">
            <div class="imgRow">
              <div class="imgColumn">
                <img v-if="imgSelfieWithID" :src="imgSelfieWithID" />
              </div>
              <div class="imgColumn">
                <img src="../assets/photo_ex.jpeg" />
              </div>
            </div>
          </div>
        </b-form-group>
        <div class="clearfix"></div>

        <b-form-group id="lblPhotoID" class="formlabel" label="Foto Diri Memegang Identitas" label-for="PhotoID">
          <b-form-file
            @change="onFileChange"
            v-model="PhotoID"
            :state="Boolean(PhotoID)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            id="PhotoID"
          ></b-form-file>
          <div class="imgContainer">
            <div class="imgRow">
              <div class="imgColumn">
                <img v-if="imgPhotoID" :src="imgPhotoID" />
              </div>
              <div class="imgColumn">
                <img src="../assets/identity_ex.jpeg" />
              </div>
            </div>
          </div>
        </b-form-group>
        <div class="clearfix"></div>

        <b-form-group id="lblOtherDocument" class="formlabel" label="Foto Diri Memegang Identitas" label-for="OtherDocument">
          <b-form-file
            @change="onFileChange"
            v-model="OtherDocument"
            :state="Boolean(OtherDocument)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            id="OtherDocument"
          ></b-form-file>
          <div class="imgContainer">
            <div class="imgRow">
              <div class="imgColumn">
                <img v-if="imgOtherDocument" :src="imgOtherDocument" />
              </div>
              <div class="imgColumn">
                <img src="../assets/other_1_ex.jpeg" />
              </div>
            </div>
          </div>
        </b-form-group>
      </b-form>
    </div>
    <div class="clearfix"></div>

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
        imgSelfieWithID: require('@/assets/upload images.jpeg'),
        imgPhotoID: require('@/assets/upload images.jpeg'),
        imgOtherDocument: require('@/assets/upload images.jpeg'),
        show: true
      }
    },
    components: {
      Navigation
    },
    mounted: function () {
      // method1 will execute at pageload
      // TODO : cari cara lebih simplenya
      if (this.SelfieWithID !== null) { this.fileChange('SelfieWithID') }
      if (this.PhotoID !== null) { this.fileChange('PhotoID') }
      if (this.OtherDocument !== null) { this.fileChange('OtherDocument') }
    },
    methods: {
      fileChange (i) {
        if (i === 'SelfieWithID') {
          this.imgSelfieWithID = URL.createObjectURL(this.SelfieWithID)
        } else if (i === 'PhotoID') {
          this.imgPhotoID = URL.createObjectURL(this.PhotoID)
        } else if (i === 'OtherDocument') {
          this.imgOtherDocument = URL.createObjectURL(this.OtherDocument)
        }
      },
      onFileChange (e) {
        const file = e.target.files[0]

        if (e.target.attributes.id.value === 'SelfieWithID') {
          this.imgSelfieWithID = URL.createObjectURL(file)
          console.log(file)
        } else if (e.target.attributes.id.value === 'PhotoID') {
          this.imgPhotoID = URL.createObjectURL(file)
        } else if (e.target.attributes.id.value === 'OtherDocument') {
          this.imgOtherDocument = URL.createObjectURL(file)
        } else {
          console.log(e.target.attributes.id.value)
        }
      }
    },
    computed: {
      SelfieWithID: {
        get () { return this.$store.state.SelfieWithID },
        set (value) { this.$store.commit('setSelfieWithID', {SelfieWithID: value}) }
      },
      PhotoID: {
        get () { return this.$store.state.PhotoID },
        set (value) { this.$store.commit('setPhotoID', {PhotoID: value}) }
      },
      OtherDocument: {
        get () { return this.$store.state.OtherDocument },
        set (value) { this.$store.commit('setOtherDocument', {OtherDocument: value}) }
      }
    }
  }
</script>

<style>
.imgColumn{
  width:300px;
  height: 300px;
  padding: 10px;
  float:left;
}

.imgColumn > img {
  width: 280px;
  height: 280px;
}

.imgRow{
  width: 50%;
}

.clearfix{
  margin-bottom: 50px;
}

.imgContainer{
  text-align: center;
  text-align: -moz-center;
  text-align: -webkit-center;
  width: 100%;
}

.formlabel{
  position:relative;
  z-index: 0;
}

@media only screen and (max-width: 600px) {
  .formlabel{
    text-align:left;
  }

  .imgColumn{
  width:180px;
  height: 180px;
  padding: 10px;
  float:left;
}

.imgColumn > img {
  width: 160px;
  height: 160px;
}

.imgRow{
  width: 100%;
}
}
</style>
