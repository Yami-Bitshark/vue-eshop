<template>
<div id="app">
    <navbar></navbar>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Products" name="first">
            <h1>Product List</h1>
            <productlist></productlist>
        </el-tab-pane>
        <el-tab-pane label="Shopping Cart" name="second">
            <h1>Shopping Cart</h1>
            <shoppingcart></shoppingcart>
            <p><b>Total Cost: {{ totalCost}}</b></p>
        </el-tab-pane>
    </el-tabs>
</div>
</template>
<script>
import {
    Store
} from './controllers/store'
export default {
    name: 'app',
    data() {
        return {
            activeName: 'first'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    computed: {
        totalCost() {
            return Store.totalCost;
        }
    }
}
</script>
<style>
    h1 {
        font-family: "Helvetica Neue";
        color : #1F2D3D;
    }
</style>
