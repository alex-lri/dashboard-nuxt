<template>
  <div v-show="loaded">
    <div v-show="$store.state.localStorage.user.connected">
      <v-btn color="success" :to="'dashboard'">Retour au dashboard</v-btn>
    </div>
    <div v-show="!$store.state.localStorage.user.connected">
      <transition name="slide-fade"
        ><Login v-if="$store.state.login"
      /></transition>
      <transition name="slide-fade"
        ><SignUp v-if="!$store.state.login"
      /></transition>
      <v-btn
        outlined
        color="white"
        v-if="$store.state.login"
        text
        @click="switchLogin"
        >S'inscrire</v-btn
      >
      <v-btn
        outlined
        color="white"
        v-if="!$store.state.login"
        text
        @click="switchLogin"
        >Se connecter</v-btn
      >
    </div>
  </div>
</template>
<script>
import { ACTIONS } from "../store/index.js";
export default {
  middleware({ store, redirect }) {
    // Si l'utilisateur est authentifié
    if (store.state.localStorage.user.connected) {
      return redirect("/dashboard");
    }
  },
  computed: {
    loaded() {
      return this.$store.state.localStorage.status;
    },
  },
  methods: {
    switchLogin() {
      this.$store.dispatch(ACTIONS.SWITCH_LOGIN);
    },
  },
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