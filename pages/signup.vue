<template>
  <v-container>
    <v-card>
      <h2>Inscription</h2>
    </v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" label="Name" required></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        name="password"
        label="Password"
        @click:append="showPassword = !showPassword"
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
        Submit
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    showPassword: false,
  }),

  methods: {
    submit() {
      this.$refs.form.submit();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>


<style scoped>
</style>