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
      if (this.$route.name === 'firstStep') return 1
      if (this.$route.name === 'secondStep') return 2
      if (this.$route.name === 'thirdStep') return 3
      if (this.$route.name === 'fourthStep') return 4
      if (this.$route.name === 'fifthStep') return 5
    },
    nextButtonText () {
      if (this.$route.name === 'fifthStep') {
        return 'Kirim'
      }

      return 'Lanjut'
    },
    isFirst () {
      return this.$route.name === 'firstStep'
    },
    navigateNext () {
      var curentSteps = this.currentStep()

      if (this.$route.name === 'fifthStep') {
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
