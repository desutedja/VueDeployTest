<template>
  <div>
    <button @click="navigatePrevious" v-show="!isFirst()">
      Sebelumnya
    </button>

    <button @click="navigateNext">
      {{ nextButtonText() }}
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    currentStep () {
      if (this.$route.name === 'personal1') return 1
      if (this.$route.name === 'personal2') return 2
      if (this.$route.name === 'personal3') return 3
      if (this.$route.name === 'job') return 4
      if (this.$route.name === 'asset') return 5
      if (this.$route.name === 'emergency') return 6
      if (this.$route.name === 'bank') return 7
      if (this.$route.name === 'document') return 8
    },
    nextButtonText () {
      if (this.$route.name === 'document') {
        return 'Kirim'
      }

      return 'Lanjut'
    },
    isFirst () {
      return this.$route.name === 'personal1'
    },
    navigateNext () {
      var curentSteps = this.currentStep()

      if (this.$route.name === 'document') {
        this.submit()
      } else {
        this.$router.push('/register/' + (++curentSteps))
      }
    },
    navigatePrevious () {
      var curentSteps = this.currentStep()

      // if (this.$route.name === 'secondStep') {
      //   this.$router.push('/register/1')
      // }

      this.$router.push('/register/' + (--curentSteps))
    },
    submit () {
      alert('selesai')
    }
  }
}
</script>
