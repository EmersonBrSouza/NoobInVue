<template>
    <div class="field">
        <label class="label">{{ label }}</label>
        <div class="control">
            <input type="text" class="input" :name="name" @blur="$v.emailValue.$touch()" autofocus v-model="emailValue">
            <span class="has-text-danger" v-if="isRequired">Field is required.</span>
            <span class="has-text-danger" v-if="email">Insert a valid email.</span>
            <span class="has-text-danger" v-if="alreadyExists">Email already exists.</span>
        </div>
    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'


export default {
    props:{
        name:{
            default:"email"
        },
        label:{
            default:"Email"
        },
        validateRemote:{
            default:false,
            type:Boolean
        },
        remoteUrl:{
            default:''
        }
    },
    data(){
        return {
            emailValue:"",
        }
    },
    validations:{
        emailValue:{
            required,
            email
        }
    },
    computed:{
        isRequired(){
            return !this.$v.emailValue.required && this.$v.$dirty
        },
        email(){
            return !this.$v.emailValue.email && this.$v.$dirty
        },

        hasError(){
            return this.$v.$error
        },
        alreadyExists(){
            if(!this.validateRemote) return false;

            if(this.emailValue.trim() == "") return false;
            
            return axios.get(this.remoteUrl,{params:{email:this.emailValue}});
        }
    }
}
</script>
