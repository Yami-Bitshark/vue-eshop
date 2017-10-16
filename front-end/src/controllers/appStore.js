import Vue from 'vue';
import Vuex from 'vuex';
import products from './products';
Vue.use(Vuex);

const state = {
    products : products,
    cart : [],
    totalQuantity : 0

};

const mutations = {
        addToCart : function(state,product){
            const locationInCart = state.cart.findIndex(function(p){
                return p.details.sku === product.sku;
            });
            if (locationInCart === -1) {
                state.cart.push({
                    details: product,
                    quantity : 1
                });
                state.totalQuantity ++;
            }
            else
            {
                state.cart[locationInCart].quantity ++;
                state.totalQuantity ++;
            }
        },
        removeFromCart : function(state,sku){
            const locationInCart = state.cart.findIndex(function(p){
                return p.details.sku === sku;
            });
            if (state.cart[locationInCart].quantity <= 1) {
                state.cart.splice(locationInCart,1)
                state.totalQuantity --;
            }
            else
            {
                state.cart[locationInCart].quantity --;
                state.totalQuantity --;
            }
        }
};

const getters = {
        totalCost : function(state){
            return state.cart.reduce(function(accum,product){
                return accum + product.details.price * product.quantity;
            },0);
        },
        totalItems : function(state){
            return state.totalQuantity;
        }
};

const actions = {

};

let appStore = new Vuex.Store({
    state : state,
    mutations : mutations,
    getters : getters,
    actions : actions
});

export default appStore;
