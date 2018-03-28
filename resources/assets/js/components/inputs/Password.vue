<template>
    <div class="field">
        <label class="label">{{ label }}</label>
        <div class="control">
            <input type="password" class="input" :name="name" @blur="$v.password.$touch()" autofocus v-model="password">
            <span class="has-text-danger" v-if="isRequired">Field is required.</span>
            <span class="has-text-danger" v-if="minLength">The password length should be greater than or equal to 6.</span>
        </div>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    props:{
        name:{
            default:"password"
        },
        label:{
            default:"Password"
        }
    },
    data(){
        return {
            password:"",
        }
    },
    validations:{
        password:{
            required,
            minLength: minLength(6)
        }
    },
    computed:{
        isRequired(){
            return !this.$v.password.required && this.$v.$dirty
        },
        minLength(){
            return !this.$v.password.minLength && this.$v.$dirty
        },
        hasError(){
            return this.$v.$error
        }
    }
}
</script>
