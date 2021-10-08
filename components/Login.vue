<template>
  <div>
    <v-container>
      <v-card>
        <h2>Connexion</h2>
      </v-card>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="mail" label="Mail" required></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          label="Mot de passe"
          required
        ></v-text-field>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
          Se connecter
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>
<script>
import { ACTIONS } from "../store/localStorage.js";
export default {
  computed: {
    loaded() {
      return this.$store.state.localStorage.status;
    },
  },
  data: () => ({
    valid: true,
    mail: "",
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
    showPassword: false,
  }),
  methods: {
    login() {
      this.$store.dispatch(ACTIONS.LOGIN, {
        mail: this.mail,
        password: this.password,
      }).then(() => {
        if (this.$store.state.localStorage.user.connected == true) {
          this.$cookies.set('connected', true, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
          });
          this.$router.push("/dashboard");
        }
      });
    },
  },
};
</script>