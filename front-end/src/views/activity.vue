<template>
    <div>
  <h1>Purchase History</h1>
  <el-table
    :data="pHistory"
    border
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="name"
      label="Name"
      style="width: 40%">
    </el-table-column>
    <el-table-column
      fixed
      prop="quantity"
      label="Quantity"
      style="width: 30%">
    </el-table-column>
    <el-table-column
      fixed
      prop="billed"
      label="Billing Amount (DH)"
      style="width: 30%">
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  computed : {
      ...mapState(['pHistory'])
  },
  beforeCreate(){
      this.$store.dispatch('loadHistory');
  }
}
</script>
<style>
    h1 {
        font-family: "Helvetica Neue";
        color : #1F2D3D;
    }
</style>
