// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import sellers from 'components/sellers/sellers.vue';

import 'common/stylus/index.styl';

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/sellers', component: sellers }
];

const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
});

Vue.use(VueRouter);

router.push('/goods');

const app = new Vue({
  components: { App },
  template: '<App/>',
  router: router
});

app.$mount('#app');
