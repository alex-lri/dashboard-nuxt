<template>
    <div>
        <transition name="slide-fade"><Login v-if="login" /></transition>
        <transition name="slide-fade"><SignUp v-if="!login" /></transition>
        <v-btn v-if="login" text @click="switchLogin">S'inscrire</v-btn>
        <v-btn v-if="!login" text @click="switchLogin">Se connecter</v-btn>
    </div>
</template>
<script>
export default {
    data: () => ({
        login: true,
    }),
    methods: {
        switchLogin(){
            this.login = !this.login;
        }
    },
    transition: {
        name: 'home',
        mode: 'out-in'
    }
}
</script>
<style>
  .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(-50px);
        opacity: 0;
    }
</style>