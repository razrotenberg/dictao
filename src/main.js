import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// include buefy components and styles
import { Button, Checkbox, Icon, Input, Tag } from 'buefy'
import 'buefy/dist/buefy.css'

// include material design icons font styles
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Tag)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
