import Vue from 'vue';
import VueRouter from 'vue-router';
import VueGtag from 'vue-gtag';
import VueMeta from 'vue-meta'
import VueRouterBackButton from 'vue-router-back-button'
import VueScrollTo from 'vue-scrollto';

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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return false
    }
  }
});

Vue.use(VueRouterBackButton, { router });

Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
