<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list v-show="loaded">
        <v-list-item
          v-show="!$store.state.localStorage.user.connected"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-show="$store.state.localStorage.user.connected"
        :to="'dashboard'"
        router
        exact>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Dashboard'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
        v-show="loaded"
        >
          <v-list-item-content>
            <v-list-item-title v-text="$store.state.localStorage.user.mail"/>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-show="$store.state.localStorage.user.connected">
          <v-btn color="error" @click="logout">Déconnexion</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <transition name="slide-fade"><Nuxt /></transition>
        
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { ACTIONS } from "../store/localStorage";
export default {
  computed: {
      loaded() {
        return this.$store.state.localStorage.status
      }
  },
  data: () => ({
    clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-login",
          title: "Login",
          to: "/connect",
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'B3DEV | Frontend NuxtJs',

    }),
    methods: {
      logout() {
        this.$store.dispatch(ACTIONS.LOGOUT);
        this.$router.push("/connect")
      }
    }
}
  

</script>

<style>
  .slide-fade-enter-active {
        transition: all .5s ease;
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