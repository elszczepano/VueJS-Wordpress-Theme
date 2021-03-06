import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';
import VueDisqus from 'vue-disqus';
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueDisqus);
Vue.use(VeeValidate);
Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    template: '<App />',
    components: { App }
});