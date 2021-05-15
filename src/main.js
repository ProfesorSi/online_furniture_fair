import Vue from 'vue';
import VueRouter from 'vue-router';
import VueGtag from 'vue-gtag';
import VueMeta from 'vue-meta'

import App from './App.vue';
import { routes } from './routes';


Vue.config.productionTip = false


Vue.use(VueGtag, {
  config: { id: "G-D9RV75ZW0H" }
});

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,

});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
