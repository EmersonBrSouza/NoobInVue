<template>
    <div class="container">
        <div class="row">
        <div class="columns">
            <div class="column">
            <span class="isCentered is-size-1 title">
                <span>DO<span>MAKE</span></span>
            </span>
            </div>
        </div>
        </div>
        <div class="row">
        <div class="columns">
            <div class="column is-10">
                <div class="control">
                    <input class="input" type="text" placeholder="Search a task">
                </div>
            </div>
            <div class="column is-2">
                <add-task v-on:showModal="showModal"></add-task>
            </div>
        </div>
        </div>
        <new-task v-show="isVisible" v-on:closeModal="closeModal" v-on:saveTask="saveTask"></new-task>
        <div class="row">
        <div class="columns">
            <div class="column" v-if="todos.length == 0">
            <h3 class="isCentered subtitle">No have tasks</h3>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column is-4" v-for="todo in todos" :key="todo.name" >
            <todo-item 
            :name="todo.name" 
            :description="todo.description"
            :status="todo.completed" 
            :date="todo.date"
            :createdAt="todo.createdAt"
            v-on:removeTask="removeTask"></todo-item>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  created(){
    this.getAllTasks();
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isVisible:false,
      todos:[]
    }
  },
  methods:{
    showModal(){
      this.isVisible = true
      return this.isVisible
    },
    closeModal(){
      this.isVisible = false
      return this.isVisible 
    },
    getAllTasks(){
      var vm = this
      axios.get('/task')
      .then(function (response) {
        console.log(tasks)
        let tasks = response.data

        tasks.forEach(element => {
          vm.todos.push(element)
        });   
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    saveTask(data){
      var vm = this
      axios.put('/task', {
        name: data.name,
        date: data.date,
        status: data.status,
        description: data.description,
        createdAt: data.createdAt
      })
      .then(function (response) {
        vm.todos.push(response.data)
        vm.closeModal();
      })
      .catch(function (error) {
        console.log(error);
      });      
    },
    removeTask(name){
      let index = this.todos.find(function(todo){ return todo.name == name});
      this.todos.splice(index,1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Exo 2', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: 700;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
