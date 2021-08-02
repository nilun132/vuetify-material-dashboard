<template>
  <v-container>
    <v-row
      v-if="error"
    >
      <v-col
        cols="12"
        sm="6"
        offset-sm="3"
      >
        <app-alert
          :text="error.message"
          @dismissed="onDismissed"
        />
      </v-col>
    </v-row>
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
                      label="Email"
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
                    <div class="text-center">
                      <v-btn
                        round
                        type="submit"
                        :disabled="loading"
                        :loading="loading"
                      >
                        Sign in
                        <span
                          slot="loader"
                          class="custom-loader"
                        >
                          <v-icon light>cached</v-icon>
                        </span>
                      </v-btn>
                    </div>
                    <div class="text-center">
                      <v-btn
                        round
                        color="warning"
                        dark
                        :disabled="loading"
                        :loading="loading"
                        @click.prevent="onResetPassword"
                      >
                        Reset Password By Email
                        <span
                          slot="loader"
                          class="custom-loader"
                        >
                          <v-icon
                            light
                          >
                            cached
                          </v-icon>
                        </span>
                      </v-btn>
                    </div>
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
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      },
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/profile')
        }
      },
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
      },
      onResetPassword () {
        if (this.email === '') {
          return this.$store.dispatch('setError', { message: 'Email can not be blank' })
        }
        this.$store.dispatch('resetPasswordWithEmail', { email: this.emai })
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      },
    },
  }
</script>
