import Vue from 'vue'
import App from './App.vue'
import Moment from 'moment'
import TodoItem from './components/TodoItem.vue'
import AddTask from './components/AddTask.vue'
import NewTask from './components/NewTask.vue'

Vue.component('todo-item',TodoItem);
Vue.component('add-task',AddTask);
Vue.component('new-task',NewTask);

new Vue({
  el: '#app',
  render: h => h(App)
})
