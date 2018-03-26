<template>
    <div class="field">
        <div class="control">
            <input type="password" class="input" :name="repeatPassword" @input="$v.repeatPassword.$touch()" autofocus v-model="repeatPassword">
            <span class="has-text-danger" v-if="!$v.repeatPassword.required">Field is required.</span>
            <span class="has-text-danger" v-if="!$v.repeatPassword.sameAs">Passwords must be identical.</span>
        </div>
    </div>
</template>

<script>
import { required, sameAs } from 'vuelidate/lib/validators'

export default {
  data(){
      return {
          repeatPassword:""
      }
  },
  validations:{
      repeatPassword:{
          required,
          sameAs: sameAs('password')
      }
  }
}
</script>
