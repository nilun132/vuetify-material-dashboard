<template>
  <v-container
    id="typography"
    fluid
    tag="section"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <base-material-card
          color="primary"
        >
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">
              -----------
            </div>

            <div class="text-subtitle-1 font-weight-light">
              -----------
            </div>
          </template>

          <v-card-text>
            <v-row>
              <v-container
                class="pa-0"
                fluid
              >
                <v-col>
                  <div class="text-center">
                    <v-dialog
                      v-model="dialog"
                      width="500"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="primary"
                          dark
                          v-bind="attrs"
                          v-on="on"
                        >
                          Time fish 1
                        </v-btn>
                      </template>

                      <v-card>
                        <v-row
                          justify="space-around"
                          align="center"
                        >
                          <v-time-picker
                            v-model="picker"
                            ampm-in-title
                          />
                        </v-row>
                        <v-card-actions>
                          <v-spacer />
                          <v-btn
                            color="primary"
                            text
                            @click="dialog1 = false"
                          >
                            I accept
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </v-col>
                <v-col>
                  <div class="text-center">
                    <v-dialog
                      v-model="dialog"
                      width="500"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="primary"
                          dark
                          v-bind="attrs"
                          v-on="on"
                        >
                          Time fish 2
                        </v-btn>
                      </template>

                      <v-card>
                        <v-row
                          justify="space-around"
                          align="center"
                        >
                          <v-time-picker
                            v-model="picker"
                            ampm-in-title
                          />
                        </v-row>
                        <v-card-actions>
                          <v-spacer />
                          <v-btn
                            color="primary"
                            text
                            @click="dialog2 = false"
                          >
                            I accept
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </v-col>
                <v-col>
                  <v-switch
                    v-model="switch1"
                    inset
                    :label="`Max PH : ${switch1.toString()}`"
                  />
                  <v-switch
                    v-model="switch2"
                    inset
                    :label="`Min PH : ${switch2.toString()}`"
                  />
                </v-col>
                <v-col>
                  <v-switch
                    v-model="switch3"
                    inset
                    :label="`Max EC : ${switch3.toString()}`"
                  />
                  <v-switch
                    v-model="switch4"
                    inset
                    :label="`Min EC : ${switch4.toString()}`"
                  />
                </v-col>
                <v-col>
                  <v-switch
                    v-model="switch5"
                    inset
                    :label="`Max Temperature water : ${switch5.toString()}`"
                  />
                  <v-switch
                    v-model="switch6"
                    inset
                    :label="`Min Temperature water : ${switch6.toString()}`"
                  />
                </v-col>
                <v-col>
                  <v-switch
                    v-model="switch7"
                    inset
                    :label="`Max Temperature air : ${switch7.toString()}`"
                  />
                  <v-switch
                    v-model="switch8"
                    inset
                    :label="`Min Temperature air : ${switch8.toString()}`"
                  />
                </v-col>
                <v-col>
                  <v-switch
                    v-model="switch9"
                    inset
                    :label="`Max Humid : ${switch9.toString()}`"
                  />
                  <v-switch
                    v-model="switch10"
                    inset
                    :label="`Min Humid : ${switch10.toString()}`"
                  />
                </v-col>
                <v-col>
                  <v-switch
                    v-model="switch11"
                    inset
                    :label="`Max Light : ${switch11.toString()}`"
                  />
                  <v-switch
                    v-model="switch12"
                    inset
                    :label="`Min Light : ${switch12.toString()}`"
                  />
                </v-col>
              </v-container>
            </v-row>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        switch1: true,
        switch2: true,
        switch3: true,
        switch4: true,
        switch5: true,
        switch6: true,
        switch7: true,
        switch8: true,
        switch9: true,
        switch10: true,
        switch11: true,
        switch12: true,
        dialog1: false,
        dialog2: false,
      }
    },
  }
</script>

<style lang="scss">
  .tim-note {
    bottom: 10px;
    color: #c0c1c2;
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    left: 0;
    margin-left: 20px;
    width: 260px;
  }
</style>
