import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-default/index.css';

import NavBar from './components/NavBar.vue';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';

//services and extentions
Vue.use(Element,{locale});

//components
Vue.component('navbar',NavBar);
Vue.component('productlist',ProductList);
Vue.component('shoppingcart',ShoppingCart);

//filters
//Vue.filter('currency',function(val){
//    return 'MAD' + parseFloat(value);
//});

new Vue({
  el: '#app',
  render: h => h(App)
})
