<template>
<el-table :data="cart" stripe style="width: 100%">
    <el-table-column prop="details.name" label="Item Name"></el-table-column>
    <el-table-column label="Price">
        <template slot-scope='scope'>
    {{ scope.row.details.price }}
   </template>
    </el-table-column>
    <el-table-column prop="quantity" label="Quantity"></el-table-column>
    <el-table-column label="">
        <template slot-scope="scope">
       <el-button type="success" icon="plus" @click='addToCart(scope.row.details)' size="mini"></el-button>
       <el-button type="danger" icon="minus" @click='removeFromCart(scope.row.details.sku)' size="mini"></el-button>
      </template>
    </el-table-column>
</el-table>

</template>
<script>
import {
    mapMutations
} from 'vuex';
import {
    mapState
} from 'vuex';
export default {
    computed: {
        ...mapState(['cart'])
    },
    methods: {
        ...mapMutations(['addToCart', 'removeFromCart'])
    }
}
</script>
