import Vue from 'vue'
import 'normalize.css'
import '@/styles/_main.scss';
import Vuelidate from 'vuelidate';
import VueMask from 'v-mask'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuelidate);
Vue.use(VueMask);

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
