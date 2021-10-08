<template>
    <div>
        <h2>Connexion</h2>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
            <v-text-field
            v-model="mail"
            label="Mail"
            required
            ></v-text-field>
            <v-text-field
            v-model="password"
            label="Mot de passe"
            required
            ></v-text-field>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="login"
            >
            Login
            </v-btn>
        </v-form>
    </div>
</template>
<script>


  import {ACTIONS} from "../store/localStorage.js";
    export default {
        computed: {
            loaded() {
                return this.$store.state.localStorage.status
            }
        },
        data: () => ({
            valid: true,
            mail: '',
            password: '',
        }),
        methods: {
            login(){
                this.$store.dispatch(ACTIONS.LOGIN, {
                    mail: this.mail,
                    password: this.password,
                });
                console.log("login attempt")
            }
        }
    }
</script>