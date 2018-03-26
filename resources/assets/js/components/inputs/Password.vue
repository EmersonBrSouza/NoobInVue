<template>
    <div class="field">
        <div class="control">
            <input type="password" class="input" :name="password" @input="$v.password.$touch()" autofocus v-model="password">
            <span class="has-text-danger" v-if="!$v.password.required">Field is required.</span>
            <span class="has-text-danger" v-if="!$v.password.minLength">The password length should be greater than or equal to 6.</span>
        </div>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data(){
      return {
          password:""
      }
  },
  validations:{
      password:{
          required,
          minLength: minLength(6)
      }
  }
}
</script>
