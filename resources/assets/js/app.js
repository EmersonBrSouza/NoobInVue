// import Vue from 'vue'
import Moment from 'moment'
import VueMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import AddTask from './components/AddTask.vue'
import NewTask from './components/NewTask.vue'
import TodoItem from './components/TodoItem.vue'


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue');
window.EventLine = new Vue({});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(Vuelidate)
Vue.use(VueMask);
Vue.component('app', require('./components/App.vue'));
Vue.component('todo-item',TodoItem);
Vue.component('add-task',AddTask);
Vue.component('new-task',NewTask);
Vue.component('input-email',require('./components/inputs/Email.vue'));
Vue.component('password',require('./components/inputs/Password.vue'));
Vue.component('confirm-password',require('./components/inputs/ConfirmPassword.vue'));
Vue.component('text-field',require('./components/inputs/Text.vue'));
Vue.component('dynamic-form',require('./components/utils/Form.vue'));
Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('component2', require('./components/Component.vue'));
Vue.component('dynamic-form', require('./components/utils/Form.vue'));
Vue.component('input-email', require('./components/inputs/Email.vue'));


const app = new Vue({
    el: '#app'
});
