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
            <div
              v-if="user"
              class="text-md-center"
            >
              <v-icon
                large
                color="green darken-2"
              >
                check_circle
              </v-icon>
              <h1
                class="green--text"
              >
                Login Success
              </h1>
              <h4
                class="text-h5"
              >
                <b class="red--text">Name :</b>
                {{ user.name }}
              </h4>
              <h4
                class="text-h5 mb-0"
              >
                <b class="red--text">Email :</b>
                {{ user.email }}
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters.user
      },
    },
  }
</script>
