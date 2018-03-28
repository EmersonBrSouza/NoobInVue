<template>
    <div class="field">
        <label class="label">{{ label }}</label>
        <div class="control">
            <input type="text" class="input" :name="name" @blur="$v.value.$touch()" autofocus :v-model="model">
            <span class="has-text-danger" v-if="isRequired">Field is required.</span>
        </div>
    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
    props:{
        name:{
            default:"text",
            required
        },
        label:{
            default:"Text"
        },
        model:{
            default:"value",
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
            return !this.$v.value.required && this.$v.$dirty
        },
        hasError(){
            return this.$v.$error
        }
    }
}
</script>
