import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueSimpleAlert from "vue-simple-alert";
import router from "./router";

Vue.use(VueSimpleAlert);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
