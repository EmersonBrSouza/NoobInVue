<template>
    <div class="field">
        <label class="label">{{ label }}</label>
        <div class="control">
            <input type="text" class="input" :name="name" @blur="$v.value.$touch()" v-model="value" ref="text">
            <span class="has-text-danger" v-if="isRequired">Field is required.</span>
        </div>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
    mounted(){
        let vm = this;
        EventLine.$on('verifySelfErrors',function(){
            vm.$refs.text.focus();
            vm.$refs.text.blur();
        });
    },
    props:{
        name:{
            required
        },
        label:{
            default:"Text"
        },
        required:{
            default:true,
            required
        }
    },
    data(){
        return{
            value:""
        }
    },
    validations:{
        value:{
            required,
        }
    },
    computed:{
        isRequired(){
            if(!this.required) return false;
            return !this.$v.value.required && this.$v.$dirty
        },
        hasError(){
            return this.$v.$error
        }
    }
}
</script>
