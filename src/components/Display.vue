<template lang="pug">
  div 
      p Because we included store in App.vue now we have access to $store in every component  
      | new State is: {{ this.$store.getters.newState }}
</template>

<script>
export default {
  
}
</script>
