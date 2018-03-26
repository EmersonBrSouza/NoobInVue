<template>
    <div class="field">
        <div class="control">
            <input type="text" class="input" :name="emailValue" @input="$v.emailValue.$touch()" autofocus v-model="emailValue">
            <span class="has-text-danger" v-if="!$v.emailValue.required">Field is required.</span>
            <span class="has-text-danger" v-if="!$v.emailValue.email">Insert a valid email.</span>
        </div>
    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data(){
      return {
          emailValue:""
      }
  },
  validations:{
      emailValue:{
          required,
          email
      }
  }
}
</script>
