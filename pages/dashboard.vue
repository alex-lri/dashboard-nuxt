<template>
  <div id="dashboard">
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


<style scoped>
</style>