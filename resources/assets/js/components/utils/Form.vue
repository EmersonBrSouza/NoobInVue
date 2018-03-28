<template>
    <form action="" v-on:submit.prevent="onSubmit" ref="form">
        <slot></slot>
    </form>
</template>

<script>
export default {
    methods:{
        canSubmit(){
            this.$children.forEach(function(el,i){
                if(el.hasError()){
                    return false;
                }
            });
            return true;
        },
        onSubmit(){
            if(this.canSubmit()){
                this.$refs.form.submit();
            }
        }
    }
}
</script>
