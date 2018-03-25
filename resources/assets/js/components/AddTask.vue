<template>
    <a class="button is-info is-12" @click="showModal">
        <span class="icon">
            <i class="fas fa-plus"></i>
        </span>
        <span>
            Add Task
        </span>
    </a>
</template>

<script>
export default {
  methods:{
      showModal: function(){
          this.$emit('showModal');
      }
  }
}
</script>
