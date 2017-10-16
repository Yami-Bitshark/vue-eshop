<template>
<el-menu theme="dark" class="el-menu-demo" mode="horizontal">
    <el-menu-item style="float: right" index="3">Total Items : {{ totalItems }}</el-menu-item>
</el-menu>
</template>

<script>
import {Store} from '../controllers/store';
export default {
    computed: {
        totalItems() {
            return Store.totalItems;
        }
    }
}
</script>
