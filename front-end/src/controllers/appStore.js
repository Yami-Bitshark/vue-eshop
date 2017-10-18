import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
//import products from './products';
Vue.use(Vuex);

const state = {
    products: [],
    cart: [],
    totalQuantity: 0

};

const mutations = {
    addToCart: function(state, product) {
        const locationInCart = state.cart.findIndex(function(p) {
            return p.details.sku === product.sku;
        });
        if (locationInCart === -1) {
            state.cart.push({
                details: product,
                quantity: 1
            });
            state.totalQuantity++;
        } else {
            state.cart[locationInCart].quantity++;
            state.totalQuantity++;
        }
    },
    removeFromCart: function(state, sku) {
        const locationInCart = state.cart.findIndex(function(p) {
            return p.details.sku === sku;
        });
        if (state.cart[locationInCart].quantity <= 1) {
            state.cart.splice(locationInCart, 1)
            state.totalQuantity--;
        } else {
            state.cart[locationInCart].quantity--;
            state.totalQuantity--;
        }
    },
    fillProducts: function(state, data) {
        state.products = data;
    },
    clearCart: function(state) {
        state.cart = [];
    }
};

const getters = {
    totalCost: function(state) {
        return state.cart.reduce(function(accum, product) {
            return accum + product.details.price * product.quantity;
        }, 0);
    },
    totalItems: function(state) {
        return state.totalQuantity;
    }
};

const actions = {
    loadProducts: function(appStore) {
        axios.get('http://localhost:3000/products')
            .then(function(resp) {
                appStore.commit('fillProducts', resp.data.data);
            })
            .catch(function(e) {
                alert('Loading Products Failed');
            });
    },
    commitPurchase: function(appStore) {
        var data = [];
        if (state.cart.length !== 0) {
            for (var i = 0; i < state.cart.length; i++) {
                data.push([state.cart[i].id, state.cart[i].quantity]);
            }
            axios.post('http://localhost:3000/commit', {
                    list: data
                })
                .then(function() {
                    alert('Commited');
                    appStore.commit('clearCart');
                })
                .catch(function(e) {
                    alert('Commit Error');
                });
        } else {
            alert('cart empty');
        }
    }
};

let appStore = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
});

export default appStore;
