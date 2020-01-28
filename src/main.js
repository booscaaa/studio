import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import dino from './plugins/dino'
import 'animate.css/animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  dino,
  render: h => h(App)
}).$mount('#app')
