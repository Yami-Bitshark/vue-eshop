import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-default/index.css';

import NavBar from './components/NavBar.vue';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';

//services and extentions
import Vuex from 'vuex';
import store from './controllers/appStore';
import router from './routes/routes';
import {sync} from 'vuex-router-sync';

Vue.use(Element,{locale});
Vue.use(Vuex);

//components
Vue.component('navbar',NavBar);
Vue.component('productlist',ProductList);
Vue.component('shoppingcart',ShoppingCart);

sync(store,router);
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
