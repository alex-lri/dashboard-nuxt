<template>
  <div>
    <h4 class="ml-2">Liste des utilisateurs</h4>
    <v-list>
      <v-list-item
        v-for="(user, i) in $store.state.localStorage.users"
        :key="i"
        exact
      >
        <v-list-item-content>
          <v-list-item-title v-text="user.name" />
          <v-list-item-title v-text="user.mail" />
          <v-list-item-title v-text="user.password" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
</script>


<style scoped>

</style>