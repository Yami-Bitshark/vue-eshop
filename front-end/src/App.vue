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
            <p><b>Total Cost: {{ totalCost}} DH</b>
            <el-button type="success" icon="plus" @click='commit' size="mini"></el-button>
            </p>
        </el-tab-pane>
    </el-tabs>
</div>
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
    name: 'app',
    data() {
        return {
            activeName: 'first'
        };
    },
    methods: {
        handleClick(tab, event) {
        },
        commit : function(){
            this.$store.dispatch('commitPurchase')
        }
    },
    computed: {
        ...mapGetters(['totalCost'])
    }
}
</script>
<style>
    h1 {
        font-family: "Helvetica Neue";
        color : #1F2D3D;
    }
</style>
