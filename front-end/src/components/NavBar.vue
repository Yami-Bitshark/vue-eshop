<template>
<el-menu theme="dark" class="el-menu-demo" mode="horizontal">
    <el-menu-item style="float: right" index="3">Total Items : {{ totalItems }}</el-menu-item>
</el-menu>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters(['totalItems'])
    }
}
</script>
