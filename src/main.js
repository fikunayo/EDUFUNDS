import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './plugins/vuetify';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
