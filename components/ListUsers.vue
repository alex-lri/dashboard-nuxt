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
          <v-row class="justify-content-between">
            <v-col class="col-6">
              <v-list-item-title v-text="user.id" />
              <v-list-item-title v-text="user.name" />
              <v-list-item-title v-text="user.mail" />
              <v-list-item-title v-text="user.password" />
            </v-col>

            <v-col class="col-6"
              ><div class="float-right">
                <v-icon medium color="red darken-1" v-on:click="deleteUser(user.id)">
                  mdi-delete
                </v-icon>
              </div>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { ACTIONS } from "../store/localStorage";

export default {
  
  methods: {
    deleteUser(userId) {
      this.$store.dispatch(ACTIONS.DELETE_USER, {
        id: userId,
      });
      if(this.$store.state.localStorage.user.connected == false){
        this.$cookies.set('connected', false, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
      }
    },
  },
};
</script>


<style scoped>
</style>