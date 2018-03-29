<template>
    <div class="field">
        <label class="label">{{ label }}</label>
        <div class="control">
            <input type="text" class="input" :name="name" @blur="$v.emailValue.$touch()" v-model="emailValue" ref="email">
            <span class="has-text-danger" v-if="isRequired">Field is required.</span>
            <span class="has-text-danger" v-else-if="email">Insert a valid email.</span>
            <span class="has-text-danger" v-else-if="alreadyExists">Email already exists.</span>
        </div>
    </div>
</template>

<script>
import { required, email, isUnique } from 'vuelidate/lib/validators'


export default {
    mounted(){
        let vm = this;
        EventLine.$on('verifySelfErrors',function(){
            vm.$refs.email.focus();
            vm.$refs.email.blur();
        });
    },
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
            isUnique(){
                return !this.alreadyExists;
            }
        }
    },
    asyncComputed:{
        alreadyExists(){
            if(!this.validateRemote) return false;
            if(this.emailValue.trim().length == 0) return false;

            return axios.get(this.remoteUrl,{params:{email:this.emailValue}})
                        .then(response => response.data.exists);
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
    }
}
</script>
