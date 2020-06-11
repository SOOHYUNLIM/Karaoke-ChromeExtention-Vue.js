import Vue from 'vue'
import App from './App.vue'
import '../plugins/axios'
import 'vue-material-design-icons/styles.css'
import vuetify from '../plugins/vuetify'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
