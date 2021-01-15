<template>
  <div>
    <div>
      <div class="center">
        <table>
          <tr>
            <th>Dokumen</th>
            <th>Persetujuan</th>
          </tr>
          <tr>
            <td>Profil Perusahaan PT Inter Pan Pasifik Futures</td>
            <td><b-button id="agree1" @click="agree1=true;AgreementProfileF();getNow()">Start</b-button></td>
          </tr>
          <tr>
            <td>Pernyataan telah melakukan simulasi</td>
            <td><b-button id="agree2" @click="agree2=true;getNow()">Start</b-button></td>
          </tr>
          <tr>
            <td>Pernyataan telah berpengalaman</td>
            <td><b-button id="agree3" @click="agree3=true;getNow()">Start</b-button></td>
          </tr>
          <tr>
            <td>Aplikasi pembukaan rekening</td>
            <td><b-button id="agree4" @click="agree4=true;getNow()">Start</b-button></td>
          </tr>
          <tr>
            <td>Pemberitahuan adanya resiko</td>
            <td><b-button id="agree5" @click="agree5=true;getNow()">Start</b-button></td>
          </tr>
          <tr>
            <td>Pernyataan bertanggung jawab atas kode akses</td>
            <td><b-button id="agree6" @click="agree6=true;getNow()">Start</b-button></td>
          </tr>
          <tr>
            <td>Pemberian Amanat</td>
            <td><b-button id="agree7" @click="agree7=true;getNow()">Start</b-button></td>
          </tr>
          <tr>
            <td>Pernyataan dana milik sendiri</td>
            <td><b-button id="agree8" @click="agree8=true;getNow()">Start</b-button></td>
          </tr>
          <tr>
            <td>Trading Fact Forex Standard Pro (12)</td>
            <td><b-button id="agree9" @click="agree9=true;getNow()">Start</b-button></td>
          </tr>
          <tr>
            <td>Trading Rule Forex Standart Pro</td>
            <td><b-button id="agree10" @click="agree10=true;getNow()">Start</b-button></td>
          </tr>
        </table>
      </div>

      <b-modal v-model="agree1" id="modal-scrollable" scrollable title="Agreement / Persetujuan 1">
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <template #modal-footer>
          <div class="w-100">
            <div>
              <div>
                <span class="span-footer">Pernyataan Menerima Ya / Tidak</span>
                <b-form-group v-slot="{ ariaDescribedby }" style="text-align:center;">
                  <b-form-radio-group>
                    <b-form-radio v-model="AgreementProfile" :aria-describedby="ariaDescribedby" name="AgreementProfile" value="Yes">Ya</b-form-radio>
                    <b-form-radio v-model="AgreementProfile" :aria-describedby="ariaDescribedby" name="AgreementProfile" value="No">Tidak</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>
              <div>
                <span class="span-footer">Pernyataan Pada Tanggal</span>
                <fieldset style="font-size: larger;font-weight: bold;text-align: center;border: 1px solid red;padding: 0 10px;"> {{ timestamp }} </fieldset>
              </div>
            </div>
            <hr />
            <p class="float-left">Modal Footer Content</p>
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="agree1=false"
            >
              Submit
            </b-button>
          </div>
        </template>
      </b-modal>

      <b-modal v-model="agree2" id="modal-scrollable" scrollable title="Agreement / Persetujuan 2">
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <template #modal-footer>
          <div class="w-100">
            <div>
              <div>
                <span class="span-footer">Pernyataan Menerima Ya / Tidak</span>
                <b-form-group v-slot="{ ariaDescribedby }" style="text-align:center;">
                  <b-form-radio-group>
                    <b-form-radio v-model="AgreementSimulation" :aria-describedby="ariaDescribedby" name="AgreementSimulation" value="Yes">Ya</b-form-radio>
                    <b-form-radio v-model="AgreementSimulation" :aria-describedby="ariaDescribedby" name="AgreementSimulation" value="No">Tidak</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>
              <div>
                <span class="span-footer">Pernyataan Pada Tanggal</span>
                <fieldset style="font-size: larger;font-weight: bold;text-align: center;border: 1px solid red;padding: 0 10px;"> {{ timestamp }} </fieldset>
              </div>
            </div>
            <hr />
            <p class="float-left">Modal Footer Content</p>
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="agree2=false"
            >
              Submit
            </b-button>
          </div>
        </template>
      </b-modal>

      <b-modal v-model="agree3" id="modal-scrollable" scrollable title="Agreement / Persetujuan 3">
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <template #modal-footer>
          <div class="w-100">
            <div>
              <div>
                <span class="span-footer">Pernyataan Menerima Ya / Tidak</span>
                <b-form-group v-slot="{ ariaDescribedby }" style="text-align:center;">
                  <b-form-radio-group>
                    <b-form-radio v-model="AgreementExperience" :aria-describedby="ariaDescribedby" name="AgreementExperience" value="Yes">Ya</b-form-radio>
                    <b-form-radio v-model="AgreementExperience" :aria-describedby="ariaDescribedby" name="AgreementExperience" value="No">Tidak</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>
              <div>
                <span class="span-footer">Pernyataan Pada Tanggal</span>
                <fieldset style="font-size: larger;font-weight: bold;text-align: center;border: 1px solid red;padding: 0 10px;"> {{ timestamp }} </fieldset>
              </div>
            </div>
            <hr />
            <p class="float-left">Modal Footer Content</p>
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="agree3=false"
            >
              Submit
            </b-button>
          </div>
        </template>
      </b-modal>

      <b-modal v-model="agree4" id="modal-scrollable" scrollable title="Agreement / Persetujuan 4">
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <template #modal-footer>
          <div class="w-100">
            <div>
              <div>
                <span class="span-footer">Pernyataan Menerima Ya / Tidak</span>
                <b-form-group v-slot="{ ariaDescribedby }" style="text-align:center;">
                  <b-form-radio-group>
                    <b-form-radio v-model="AgreementAccount" :aria-describedby="ariaDescribedby" name="AgreementAccount" value="Yes">Ya</b-form-radio>
                    <b-form-radio v-model="AgreementAccount" :aria-describedby="ariaDescribedby" name="AgreementAccount" value="No">Tidak</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>
              <div>
                <span class="span-footer">Pernyataan Pada Tanggal</span>
                <fieldset style="font-size: larger;font-weight: bold;text-align: center;border: 1px solid red;padding: 0 10px;"> {{ timestamp }} </fieldset>
              </div>
            </div>
            <hr />
            <p class="float-left">Modal Footer Content</p>
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="agree4=false"
            >
              Submit
            </b-button>
          </div>
        </template>
      </b-modal>

      <b-modal v-model="agree5" id="modal-scrollable" scrollable title="Agreement / Persetujuan 5">
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <template #modal-footer>
          <div class="w-100">
            <div>
              <div>
                <span class="span-footer">Pernyataan Menerima Ya / Tidak</span>
                <b-form-group v-slot="{ ariaDescribedby }" style="text-align:center;">
                  <b-form-radio-group>
                    <b-form-radio v-model="AgreementRisk" :aria-describedby="ariaDescribedby" name="AgreementRisk" value="Yes">Ya</b-form-radio>
                    <b-form-radio v-model="AgreementRisk" :aria-describedby="ariaDescribedby" name="AgreementRisk" value="No">Tidak</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>
              <div>
                <span class="span-footer">Pernyataan Pada Tanggal</span>
                <fieldset style="font-size: larger;font-weight: bold;text-align: center;border: 1px solid red;padding: 0 10px;"> {{ timestamp }} </fieldset>
              </div>
            </div>
            <hr />
            <p class="float-left">Modal Footer Content</p>
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="agree5=false"
            >
              Submit
            </b-button>
          </div>
        </template>
      </b-modal>

      <b-modal v-model="agree6" id="modal-scrollable" scrollable title="Agreement / Persetujuan 6">
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <template #modal-footer>
          <div class="w-100">
            <div>
              <div>
                <span class="span-footer">Pernyataan Menerima Ya / Tidak</span>
                <b-form-group v-slot="{ ariaDescribedby }" style="text-align:center;">
                  <b-form-radio-group>
                    <b-form-radio v-model="AgreementAccess" :aria-describedby="ariaDescribedby" name="AgreementAccess" value="Yes">Ya</b-form-radio>
                    <b-form-radio v-model="AgreementAccess" :aria-describedby="ariaDescribedby" name="AgreementAccess" value="No">Tidak</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>
              <div>
                <span class="span-footer">Pernyataan Pada Tanggal</span>
                <fieldset style="font-size: larger;font-weight: bold;text-align: center;border: 1px solid red;padding: 0 10px;"> {{ timestamp }} </fieldset>
              </div>
            </div>
            <hr />
            <p class="float-left">Modal Footer Content</p>
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="agree6=false"
            >
              Submit
            </b-button>
          </div>
        </template>
      </b-modal>

      <b-modal v-model="agree7" id="modal-scrollable" scrollable title="Agreement / Persetujuan 7">
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <template #modal-footer>
          <div class="w-100">
            <div>
              <div>
                <span class="span-footer">Pernyataan Menerima Ya / Tidak</span>
                <b-form-group v-slot="{ ariaDescribedby }" style="text-align:center;">
                  <b-form-radio-group>
                    <b-form-radio v-model="AgreementMandate" :aria-describedby="ariaDescribedby" name="AgreementMandate" value="Yes">Ya</b-form-radio>
                    <b-form-radio v-model="AgreementMandate" :aria-describedby="ariaDescribedby" name="AgreementMandate" value="No">Tidak</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>
              <div>
                <span class="span-footer">Pernyataan Pada Tanggal</span>
                <fieldset style="font-size: larger;font-weight: bold;text-align: center;border: 1px solid red;padding: 0 10px;"> {{ timestamp }} </fieldset>
              </div>
            </div>
            <hr />
            <p class="float-left">Modal Footer Content</p>
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="agree7=false"
            >
              Submit
            </b-button>
          </div>
        </template>
      </b-modal>

      <b-modal v-model="agree8" id="modal-scrollable" scrollable title="Agreement / Persetujuan 8">
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <template #modal-footer>
          <div class="w-100">
            <div>
              <div>
                <span class="span-footer">Pernyataan Menerima Ya / Tidak</span>
                <b-form-group v-slot="{ ariaDescribedby }" style="text-align:center;">
                  <b-form-radio-group>
                    <b-form-radio v-model="AgreementFunds" :aria-describedby="ariaDescribedby" name="AgreementFunds" value="Yes">Ya</b-form-radio>
                    <b-form-radio v-model="AgreementFunds" :aria-describedby="ariaDescribedby" name="AgreementFunds" value="No">Tidak</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>
              <div>
                <span class="span-footer">Pernyataan Pada Tanggal</span>
                <fieldset style="font-size: larger;font-weight: bold;text-align: center;border: 1px solid red;padding: 0 10px;"> {{ timestamp }} </fieldset>
              </div>
            </div>
            <hr />
            <p class="float-left">Modal Footer Content</p>
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="agree8=false"
            >
              Submit
            </b-button>
          </div>
        </template>
      </b-modal>

      <b-modal v-model="agree9" id="modal-scrollable" scrollable title="Agreement / Persetujuan 9">
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <template #modal-footer>
          <div class="w-100">
            <div>
              <div>
                <span class="span-footer">Pernyataan Menerima Ya / Tidak</span>
                <b-form-group v-slot="{ ariaDescribedby }" style="text-align:center;">
                  <b-form-radio-group>
                    <b-form-radio v-model="AgreementFact" :aria-describedby="ariaDescribedby" name="AgreementFact" value="Yes">Ya</b-form-radio>
                    <b-form-radio v-model="AgreementFact" :aria-describedby="ariaDescribedby" name="AgreementFact" value="No">Tidak</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>
              <div>
                <span class="span-footer">Pernyataan Pada Tanggal</span>
                <fieldset style="font-size: larger;font-weight: bold;text-align: center;border: 1px solid red;padding: 0 10px;"> {{ timestamp }} </fieldset>
              </div>
            </div>
            <hr />
            <p class="float-left">Modal Footer Content</p>
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="agree9=false"
            >
              Submit
            </b-button>
          </div>
        </template>
      </b-modal>

      <b-modal v-model="agree10" id="modal-scrollable" scrollable title="Agreement / Persetujuan 10">
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <template #modal-footer>
          <div class="w-100">
            <div>
              <div>
                <span class="span-footer">Pernyataan Menerima Ya / Tidak</span>
                <b-form-group v-slot="{ ariaDescribedby }" style="text-align:center;">
                  <b-form-radio-group>
                    <b-form-radio v-model="AgreementRule" :aria-describedby="ariaDescribedby" name="AgreementRule" value="Yes">Ya</b-form-radio>
                    <b-form-radio v-model="AgreementRule" :aria-describedby="ariaDescribedby" name="AgreementRule" value="No">Tidak</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>
              <div>
                <span class="span-footer">Pernyataan Pada Tanggal</span>
                <fieldset style="font-size: larger;font-weight: bold;text-align: center;border: 1px solid red;padding: 0 10px;"> {{ timestamp }} </fieldset>
              </div>
            </div>
            <hr />
            <p class="float-left">Modal Footer Content</p>
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="agree10=false"
            >
              Submit
            </b-button>
          </div>
        </template>
      </b-modal>
    </div>
    <br />
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
        agree1: false,
        agree2: false,
        agree3: false,
        agree4: false,
        agree5: false,
        agree6: false,
        agree7: false,
        agree8: false,
        agree9: false,
        agree10: false,
        timestamp: ''
      }
    },
    components: {
      Navigation
    },
    methods: {
      getNow: function () {
        const today = new Date()
        const date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + (today.getDate() + 1)).slice(-2)
        this.timestamp = date
      },
      AgreementProfileF: function () {
        console.log(this.$store.state.AgreementProfile)
      }
    },
    computed: {
      AgreementProfile: {
        get () { return this.$store.state.AgreementProfile }, // return this.$store.state.AgreementProfile },
        set (value) { return this.$store.commit('setAgreementProfile', {AgreementProfile: value}) }
      }
    }
  }
</script>

<style>
.center{
  text-align: center;
  text-align: -moz-center;
  text-align: -webkit-center;
}

.center > table > tr > td > button {
  width: 100%;
  background: -moz-linear-gradient(top,  #33a6cc 50%, #0099cc 50%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,#33a6cc), color-stop(50%,#0099cc)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  #33a6cc 50%,#0099cc 50%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  #33a6cc 50%,#0099cc 50%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  #33a6cc 50%,#0099cc 50%); /* IE10+ */
  background: linear-gradient(to bottom,  #33a6cc 50%,#0099cc 50%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#33a6cc', endColorstr='#0099cc',GradientType=0 ); /* IE6-9 */
}

.span-footer{
  float: left;
  width: 60%;
}

@media only screen and (max-width: 600px) {
  .formlabel{
    text-align:left;
  }
}
</style>
