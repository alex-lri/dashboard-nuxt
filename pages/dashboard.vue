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
        Bonjour, NOM
      </v-alert>
      <!-- /Alert -->
      <v-card>
        <div>
          <div><h2>Dashboard</h2></div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script></script>


<style scoped>
</style>