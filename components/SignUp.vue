<template>
  <v-container>
    <v-card>
      <h2>Inscription</h2>
    </v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="mail"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        name="password"
        label="Password"
        @click:append="showPassword = !showPassword"
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="send">
        S'inscrire
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { ACTIONS } from "../store/localStorage";

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    mail: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
    showPassword: false,
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    send() {
      this.$store.dispatch(ACTIONS.ADD_USER, {
        name: this.name,
        mail: this.mail,
        password: this.password,
      });
      this.name = "";
      this.mail = "";
      this.password = "";
    },
  },
};
</script>


<style scoped>
</style>