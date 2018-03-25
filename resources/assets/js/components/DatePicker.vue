<template>
	<datepicker language="pt-br" v-bind:inputClass="{'input':true, 'is-primary':true}" 
				placeholder="15/03/2001" v-mask="'##/##/####'" :format="customFormatter">
	</datepicker>
</template>

<script>

// import Datepicker from 'vuejs-datepicker';
var moment = require('moment');

export default {
	methods: {
	    customFormatter(date) {
	      return moment(date).format('DD/MM/YYYY');
	    }
	},
	components: {
      Datepicker
  	}		
}
</script>