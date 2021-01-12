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
    nextButtonText () {
      if (this.$route.name === 'secondStep') {
        return 'Kirim'
      }

      return 'Lanjut'
    },
    isFirst () {
      return this.$route.name === 'firstStep'
    },
    navigateNext () {
      // if (this.$router.name === 'secondStep') {
      //   submit()
      // }

      this.$router.push('/register/2')
    },
    navigatePrevious () {
      if (this.$route.name === 'secondStep') {
        this.$router.push('/register/1')
      }
    },
    submit () {
      alert('selesai')
    }
  }
}
</script>
