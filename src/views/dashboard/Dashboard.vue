<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-stats-card
          color="primary"
          icon="mdi-cloud"
          title="ອຸນຫະພູມອາກາດ"
          :value="get_sensor_data.temp_air"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-stats-card
          color="primary"
          icon="mdi-water"
          title="ຄວາມຊຸມ"
          :value="get_sensor_data.humid"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-stats-card
          color="primary"
          icon="mdi-beaker-alert-outline"
          title="ຄ່າPH"
          :value="get_sensor_data.ph"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-stats-card
          color="primary"
          icon="mdi-beaker-alert"
          title="ຄ່າEC"
          :value="get_sensor_data.ec"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-stats-card
          color="primary"
          icon="mdi-thermometer"
          title="ອຸນຫະພູມນ້ຳ"
          :value="get_sensor_data.temp_water"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-stats-card
          color="primary"
          icon="mdi-brightness-4"
          title="ຄ່າແສງ"
          :value="get_sensor_data.light"
        />
      </v-col>
    </v-row>
    <v-switch
      v-model="control_pump"
      inset
      :label="`ເປິດ-ປິດ Pump : ${switch1.toString()}`"
    />
    <v-switch
      v-model="switch2"
      inset
      :label="`ໃຫ້ອາຫານປາ : ${switch2.toString()}`"
    />
    <v-switch
      v-model="switch3"
      inset
      :label="`Auto : ${switch3.toString()}`"
    />
    <v-switch
      color="success"
      :input-value="!t"
      @change="change"
    />

    <div> {{ get_setting_data }} </div>
    <div> {{ get_sensor_data }} </div>
    <div> {{ get_max_temp_air }} </div>
    <div> {{ get_max_humid }} </div>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardDashboard',

    data () {
      return {
        switch1: true,
        switch2: true,
        switch3: true,
        data: {
          massageText: '',
          massages: [],
          username: 'ton',
          Numbertest: '12',
        },
        dailySalesChart: {
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
              [12, 17, 7, 17, 23, 18, 38],
            ],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        dataCompletedTasksChart: {
          data: {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
              [230, 750, 450, 300, 280, 240, 200, 190],
            ],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        emailsSubscriptionChart: {
          data: {
            labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],

            ],
          },
          options: {
            axisX: {
              showGrid: false,
            },
            low: 0,
            high: 1000,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0,
            },
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                },
              },
            }],
          ],
        },
        headers: [
          {
            sortable: false,
            text: 'ID',
            value: 'id',
          },
          {
            sortable: false,
            text: 'Name',
            value: 'name',
          },
          {
            sortable: false,
            text: 'Salary',
            value: 'salary',
            align: 'right',
          },
          {
            sortable: false,
            text: 'Country',
            value: 'country',
            align: 'right',
          },
          {
            sortable: false,
            text: 'City',
            value: 'city',
            align: 'right',
          },
        ],
        items: [
          {
            id: 1,
            name: 'Dakota Rice',
            country: 'Niger',
            city: 'Oud-Tunrhout',
            salary: '$35,738',
          },
          {
            id: 2,
            name: 'Minerva Hooper',
            country: 'Curaçao',
            city: 'Sinaai-Waas',
            salary: '$23,738',
          },
          {
            id: 3,
            name: 'Sage Rodriguez',
            country: 'Netherlands',
            city: 'Overland Park',
            salary: '$56,142',
          },
          {
            id: 4,
            name: 'Philip Chanley',
            country: 'Korea, South',
            city: 'Gloucester',
            salary: '$38,735',
          },
          {
            id: 5,
            name: 'Doris Greene',
            country: 'Malawi',
            city: 'Feldkirchen in Kārnten',
            salary: '$63,542',
          },
        ],
        tabs: 0,
        tasks: {
          0: [
            {
              text: 'Sign contract for "What are conference organizers afraid of?"',
              value: true,
            },
            {
              text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
              value: false,
            },
            {
              text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              value: false,
            },
            {
              text: 'Create 4 Invisible User Experiences you Never Knew About',
              value: true,
            },
          ],
          1: [
            {
              text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              value: true,
            },
            {
              text: 'Sign contract for "What are conference organizers afraid of?"',
              value: false,
            },
          ],
          2: [
            {
              text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
              value: false,
            },
            {
              text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              value: true,
            },
            {
              text: 'Sign contract for "What are conference organizers afraid of?"',
              value: true,
            },
          ],
        },
        list: {
          0: false,
          1: false,
          2: false,
        },
      }
    },
    computed: {
      doneTodosCount () {
        return this.$store.state.todos.filter(todo => todo.done).length
      },
      get_setting_data () {
        return this.$store.getters.get_setting_data
      },
      get_sensor_data () {
        return this.$store.getters.get_sensor_data
      },
      get_max_temp_air () {
        return this.$store.getters.get_max_temp_air
      },
      get_max_humid () {
        return this.$store.getters.get_max_humid
      },
      control_pump () {
        var data
        if (this.switch1) {
          data = 3
        } else {
          data = 2
        }
        console.log(this.switch1)
        return this.$store.commit('SET_ARDUINO_STREAMING', data)
      },
    },
    beforeCreate: function () {
      this.$store.commit('SET_SENSOR_DATA')
      this.$store.commit('SET_SETTING_DATA')
    },
    // mounted: {
    //   initial_setting_data () {
    //     return this.$store.commit('SET_SETTING_DATA')
    //   },
    // },
    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
      change () {
        console.log('change')
        this.t = !this.t
      },
    },
  }
</script>
