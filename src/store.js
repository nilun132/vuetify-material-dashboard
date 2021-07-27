import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
    ],
    my_data: 'a',
    // sensor_data: {
    //   temp: '',
    //   humid: '',
    //   light: '',
    //   ph: '',
    //   ec: '',
    //   temp_water: '',
    // },
    sensor_data_from_arduino: {},
    setting_data: {},
    sensor_values: [],
    data_from_sensor: [],
  },
  getters: {
    test_get (state) {
      var myTime = []
      state.data_from_sensor.forEach(Element => myTime.push(Element))
      return myTime
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    get_my_data: state => {
      return state.my_data
    },
    get_setting_data: state => {
      return state.setting_data
    },
    get_sensor_data (state) {
      return state.sensor_data_from_arduino
    },
    get_max_temp_air (state) {
      return state.setting_data.maxTempAir
    },
    get_max_humid (state) {
      return state.setting_data.maxHumid
    },
    get_sensor_value (state) {
      return state.sensor_values
    },
    get_data_from_sensor (state) {
      console.log('key data sensor is ====>>')
      for (const [key, values] of Object.entries(state.sensor_values)) {
        console.log(key)
        console.log(values)
        console.log('>>>>>>>>>>>>>>>>>>>>>')
        for (const item in values) {
          console.log(values[item])
          if (item != null) {
            // state.data_from_sensor.push(JSON.parse('{"time":"1-2-2022 00:00", "temp": "25", "humid": "64","ph":"6","light":"2495","ec":"3","temp_water":"28"}'))
            state.data_from_sensor.push(JSON.stringify(values[item]))
            console.log(values[item])
          }
        }
      }
      console.log('data array is ......')
      console.log(state.data_from_sensor)
      return state.data_from_sensor
    },
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    ADD_DATA (state, data) {
      state.my_data = data
    },
    SET_SETTING_DATA (state) {
      firebase.database().ref('setting')
          .on('value', event => {
              console.log(event.val())
              state.setting_data = event.val()
          })
    },
    SET_SENSOR_DATA_VALUES (state) {
      firebase.database().ref('sensor-values-web')
          .on('value', event => {
              // console.log(event.val())
              state.sensor_values = event.val()
          })
    },
    SET_SENSOR_DATA (state) {
      var splitData = []
      firebase.database().ref('data_sensor_from_arduino/data_from_arduino')
          .on('value', event => {
            state.sensor_data_from_arduino = event.val()
            console.log(event.val())
            splitData = event.val().split(',')
            console.log(splitData)
            state.sensor_data_from_arduino = {
              time: splitData[0],
              temp_air: splitData[1],
              humid: splitData[2],
              ec: splitData[3],
              ph: splitData[4],
              temp_water: splitData[5],
              light: splitData[6],
            }
          })
    },
    SET_ARDUINO_STREAMING (state, data) {
      firebase.database().ref('arduino_streaming')
      .set(data)
    },
    setError (state, payload) {
        state.error = payload
    },
  },
  actions: {

  },
})
