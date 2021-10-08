<template>
<div v-show="loaded">
  <div v-show="!$store.state.localStorage.user.connected">
      <v-btn color="success" :to="'connect'">Aller à la page de connexion</v-btn>
  </div>
  <div v-show="$store.state.localStorage.user.connected" id="dashboard">
    <v-container>
      <!-- Alert on login submit -->
      <v-alert
        v-model="alert"
        border="left"
        close-text="Close Alert"
        color="light-blue darken-4"
        dark
        dismissible
      >
        Bonjour, {{ $store.state.localStorage.user.name }}
      </v-alert>
      <!-- /Alert -->
      <v-card>
        <div><h2 class="ml-2">Dashboard</h2></div>
      </v-card>

      <v-card class="mt-5">
        <div><ListUsers /></div>
      </v-card>
    </v-container>
  </div>
</div>

</template>
  

<script>


export default {
  data() {
    return {
      alert: true,
    };
  },
  computed: {
    loaded() {
      return this.$store.state.localStorage.status;
    },
  },
};
</script>

