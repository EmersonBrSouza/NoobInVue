<template>
    <div>
        <div class="field">
            <label class="label">{{ label }}</label>
            <div class="control">
                <input type="password" class="input" :name="name" @blur="$v.password.$touch()" v-model="password" ref="password">
                <span class="has-text-danger" v-if="isRequired">Field is required.</span>
                <span class="has-text-danger" v-else-if="minLength">The password length should be greater than or equal to 6.</span>
            </div>
        </div>
        <div class="field">
            <label class="label">{{ confirmationLabel }}</label>
            <div class="control">
                <input type="password" class="input" :name="confirmationName" @blur="$v.repeatPassword.$touch()" v-model="repeatPassword" ref="passwordConfirmation">
                <span class="has-text-danger" v-if="isRequiredConfirmation">Field is required.</span>
                <span class="has-text-danger" v-else-if="equalTo">Passwords must be identical.</span>
            </div>
        </div>
    </div>
    
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
    props:{
        confirmationLabel:{
            default:"Confirm Password"
        },
        confirmationName:{
            default:"password_confirmation"
        },
        label:{
            default:"Password"
        },
        name:{
            default:"password",
        }
    },
    data(){
        return {
            password:'',
            repeatPassword:'',
        }
    },
    validations:{
        password:{
            required,
            minLength: minLength(6)
        },
        repeatPassword:{
            required,
            sameAs: sameAs('password')
        }
    },
    computed:{
        isRequired(){
            return !this.$v.password.required && this.$v.$dirty
        },
        isRequiredConfirmation(){
            return !this.$v.repeatPassword.required && this.$v.$dirty
        },
        equalTo(){
            return !this.$v.repeatPassword.sameAs && this.$v.$dirty
        },
        minLength(){
            return !this.$v.password.minLength && this.$v.$dirty
        },
        
    },
    mounted(){
        let vm = this;
        EventLine.$on('verifySelfErrors',function(){
            vm.$refs.password.focus();
            vm.$refs.password.blur();
            vm.$refs.passwordConfirmation.focus();
            vm.$refs.passwordConfirmation.blur();
        });
    }
}
</script>
