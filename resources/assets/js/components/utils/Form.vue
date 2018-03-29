<template>
    <form :action="action" :method="method" v-on:submit.prevent="onSubmit" ref="form">
        <slot></slot>
    </form>
</template>

<script>
export default {
    props:['method','action'],
    methods:{
        canSubmit(){
            var response = true;
            this.$children.forEach(function(el,i){
                console.log(el.$v.$error);
                console.log(el.$v);               
                if(el.$v.$error){
                    response = false;
                }
            });
            console.log(response);
            return response;
        },
        onSubmit(){
            EventLine.$emit('verifySelfErrors');
            if(this.canSubmit()){
                console.log("oi");
                this.$refs.form.submit();
            }
        }
    }
}
</script>
