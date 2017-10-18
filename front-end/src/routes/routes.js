'use strict'
import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '../views/store.vue';
import Activity from '../views/activity.vue';
Vue.use(VueRouter);
let router = new VueRouter({
    mode : 'history',
    routes:[
        {
            path: '/store',
            component : Store,
            name : 'Application Store'
        },
        {
            path: '/activity',
            component : Activity,
            name : 'Activites and purchase history'
        }
    ]
});
export default router;
