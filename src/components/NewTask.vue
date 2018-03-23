<template>
    <div class="modal is-active" v-show="isVisible">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Create a new task</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                <div class="row">
                    <div class="columns">
                        <div class="column is-6">
                            <div class="field">
                                <label class="label has-text-left">Name</label>
                                <div class="control">
                                    <input class="input is-primary" type="text" placeholder="Task Name" v-model="name">
                                </div>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="field">
                                <label class="label has-text-left">Date</label>
                                <div class="control">
                                    <input class="input is-primary" type="text" placeholder="15/03/2001" v-model="date">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label has-text-left">Description</label>
                                <div class="control">
                                    <textarea class="textarea is-primary" placeholder="A simple text" v-model="description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="sendTask">Save Task</button>
                <button class="button" @click="resetForm">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
var moment = require('moment');
export default {

    data(){
        return{
            isVisible:false,
            name:'',
            date:'',
            description:'',
            moment:moment
        }
    },
    methods:{
        
        closeModal(){
            this.$emit('closeModal')
        },
        sendTask(){
            this.$emit('saveTask',{name:this.name,date:this.date,description:this.description,completed:false,createdAt:this.moment().calendar()});
            this.resetForm();
        },
        resetForm(){
            this.name = ""
            this.date = ""
            this.description = ""
            this.closeModal()
        }
  }
}
</script>

