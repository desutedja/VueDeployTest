<template>
  <div>
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" name="firstName" v-model="firstName"/>

    <label for="email-address">Email Address</label>
    <input type="email" id="email-address" name="email" v-model="email"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      firstName: '',
      email: ''
    }
  }
}
</script>
