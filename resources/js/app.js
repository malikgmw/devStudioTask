import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import moment from 'moment';

import BootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(BootstrapVue);
Vue.use(FlashMessage);

import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

Vue.filter('timeAgo', (value) => {
    if (!value) {
      return '';
    }
    return moment(value).startOf('hour').fromNow();
});

Vue.filter('mdyHM', (value) => {
    if (!value) {
      return '';
    }
    return moment(value).format("MMM Do YYYY HH:MM");
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
