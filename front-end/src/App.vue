<template>
  <div id="app">
    <navbar></navbar>
    <el-row :gutter="20">
      <el-col :span="16">
        <h1>Product List</h1>
        <productlist></productlist>
      </el-col>
      <el-col :span="8">
        <h1>Shopping Cart</h1>
        <shoppingcart></shoppingcart>
        <p><b>Total Cost: {{ totalCost}}</b></p>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import {Store} from './controllers/store'
export default {
  name: 'app',
  computed: {
    totalCost(){
      return Store.totalCost
    }
  }
}
</script>
