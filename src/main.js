import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import configRouter from './router'
import Element from 'element-ui'

Vue.use(Element);
Vue.use(VueRouter);
Vue.use(vueResource);

const router = new VueRouter({
    hashbang: false,
    mode: 'history',
    routes: configRouter
});

const app = new Vue({
    router,
    watch: {
        '$route':function(){
            $(".modal-backdrop.fade.in").remove();
        }
    }
}).$mount('#app');

Vue.filter('lengthFilter', function (value, length) {
    if(value && value.length > length){
        value = value.substring(0, length) + "...";
    }
    return value;
});
