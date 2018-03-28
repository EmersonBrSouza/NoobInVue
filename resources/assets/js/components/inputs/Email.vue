<template>
    <div class="field">
        <label class="label">{{ label }}</label>
        <div class="control">
            <input type="text" class="input" :name="name" @blur="$v.emailValue.$touch()" autofocus v-model="emailValue">
            <span class="has-text-danger" v-if="isRequired">Field is required.</span>
            <span class="has-text-danger" v-if="email">Insert a valid email.</span>
            <span class="has-text-danger" v-if="unique">Email already exists.</span>
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
            email,
            isUnique(value){
                if (value === '') return true
                return axios.get('/verify_email',{params:{email:value}});
            }
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
        }
    },
    watch(){
        unique:{
            if(!validateRemote) return true;

            if(this.remoteUrl.trim() == "") return true;
        }
    }
}
</script>
