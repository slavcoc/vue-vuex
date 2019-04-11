<template lang="pug">
    div
      p Using Vuex for state menaging
      label Here we can add input to enter the state (initaly is empty string - see store.js)
      div
        input(@input='change')
</template>

<script>
export default {
  methods: {
    // we are calling this method in input(@input='change')
    // this function will access it global $store object (because we add it in our App.vue) and will send to 'change' mutation the new state value
    // which is value of input field accesing it with event.target.value
    change: function(event) {
      this.$store.commit('change', event.target.value)
    }
  }
}
</script>