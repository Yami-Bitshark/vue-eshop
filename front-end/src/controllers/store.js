import Vue from 'vue';
import products from './products';
export const Store = new Vue({
    data(){
        return {
            products,
            cart : [],
            totalQuantity : 0

        };
    },
    computed : {
        totalCost(){
            return this.cart.reduce(function(accum,product){
                return accum + product.details.price * product.quantity;
            },0);
        },
        totalItems(){
            return this.totalQuantity;
        }
    },
    methods : {
        addToCart(product){
            const locationInCart = this.cart.findIndex(function(p){
                return p.details.sku === product.sku;
            });
            if (locationInCart === -1) {
                this.cart.push({
                    details: product,
                    quantity : 1
                });
                this.totalQuantity ++;
            }
            else
            {
                this.cart[locationInCart].quantity ++;
                this.totalQuantity ++;
            }
        },
        removeFromCart(sku){
            const locationInCart = this.cart.findIndex(function(p){
                return p.details.sku === sku;
            });
            if (this.cart[locationInCart].quantity <= 1) {
                this.cart.splice(locationInCart,1)
                this.totalQuantity --;
            }
            else
            {
                this.cart[locationInCart].quantity --;
                this.totalQuantity --;
            }
        }
    }
});
