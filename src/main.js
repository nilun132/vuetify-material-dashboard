// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import firebase from 'firebase'

// const database = firebase.database()
// const messRef = database.ref(mess)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  data: {
    arduino_steaming: '',
  },
  created () {
    const firebaseConfig = {
      apiKey: 'AIzaSyDr0UwYjDiVbU_6T7VdrEtlcGdV4PIVRdI',
      authDomain: 'project-x-23d73.firebaseapp.com',
      databaseURL: 'https://project-x-23d73-default-rtdb.firebaseio.com',
      projectId: 'project-x-23d73',
      storageBucket: 'project-x-23d73.appspot.com',
      messagingSenderId: '240804399954',
      appId: '1:240804399954:web:0e74c9c7ea11e177a1888b',
      measurementId: 'G-1WXJM9XP54',
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    // const preObject = document.getElementById('object')
    const database = firebase.database().ref().child('data_sensor_from_arduino/data_from_arduino')

    const data = database.on('value', snap => snap.val())
    store.commit('ADD_DATA', data)
    console.log(data)
    console.log('..................')
    console.log(this.$store.getters.get_my_data)
  },
  render: h => h(App),
}).$mount('#app')
