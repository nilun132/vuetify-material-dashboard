<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        offset-sm="3"
      >
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin">
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      id="email"
                      v-model="email"
                      name="email"
                      label="Mail"
                      type="email"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      id="password"
                      v-model="password"
                      name="password"
                      label="Password"
                      type="password"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-btn
                      type="submit"
                      color="primary"
                    >
                      Sign in
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    if you don't have account signup here
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-btn
                      color="primary"
                    >
                      Sign up
                    </v-btn>
                  </v-col>
                </v-row>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
      },
    },
  }
</script>
