<template>
    
    <div class="box">
        <article class="media">
            <div class="media-left">
            </div>
            <div class="media-content">
            <div class="content">
                <p>
                <strong>{{name}}</strong>
                <span v-if="status == true" class="tags has-addons is-pulled-right">
                    <span class="tag fas fa-check-circle is-success"></span>
                    <span class="tag">Completed</span>
                </span>

                <span v-if="status == false" class="tags has-addons is-pulled-right">
                    <span class="tag fas fa-times-circle is-danger"></span>
                    <span class="tag">Opened</span>
                </span>
                <br>
                <small>{{date}}</small> 
                <br>
                {{description}}
                </p>
            </div>
            <nav class="level is-mobile">
                <div class="level-left">
                    <a class="level-item">
                        <span class="icon is-small has-text-info"><i class="fas fa-edit"></i></span>
                    </a>
                    <a class="level-item" @click="removeTask">
                        <span class="icon is-small has-text-danger"><i class="fas fa-trash"></i></span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-small has-text-success"><i class="fas fa-share"></i></span>
                    </a>
                </div>
                <div class="level-right">
                    Created at {{createdAt}}
                </div>
            </nav>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    props:['name','date','description','status','createdAt'],
    methods:{
        removeTask(){
            this.$emit('removeTask',this.name);
        }
    }
}
</script>
