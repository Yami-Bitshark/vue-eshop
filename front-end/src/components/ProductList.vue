<template>
  <el-table
    :data="products"
    border
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="id"
      label="Id"
      style="width: 10%">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Product Name"
      style="width: 40%">
    </el-table-column>
    <el-table-column
      prop="price"
      label="Price (DH)"
      style="width: 25%">
    </el-table-column>
    <el-table-column
      label="Operations"
      style="width: 25%">
      <template scope="scope">
        <el-button
          @click.native.prevent="addToCart(products[scope.$index])"
          type="text"
          size="small">
          Add to Cart
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import {Store} from '../controllers/store'
export default {
  data() {
    return {
     products: Store.$data.products
    };
  },
  methods: {
   addToCart(product){
    Store.addToCart(product)
   }
  }
}
</script>
<style>
  .image {
    width: 100%;
    display: block;
  }
</style>
