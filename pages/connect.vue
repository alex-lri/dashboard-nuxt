<template>
  <div>
    <transition name="slide-fade"><Login v-if="login" /></transition>
    <transition name="slide-fade"><SignUp v-if="!login" /></transition>
    <v-btn outlined color="white" v-if="login" text @click="switchLogin"
      >S'inscrire</v-btn
    >
    <v-btn outlined color="white" v-if="!login" text @click="switchLogin"
      >Se connecter</v-btn
    >
  </div>
</template>
<script>
export default {
  data: () => ({
    login: true,
  }),
  methods: {
    switchLogin() {
      this.login = !this.login;
    },
  },
  middleware: "connected",
};
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0s ease;
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0;
}
</style>