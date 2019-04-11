<template>
  <div id="app">
    <Input />
    <Display/>
  </div>
</template>

<script>
import Input from './components/Input.vue'
import Display from './components/Display'
import { store } from './store/store'

export default {
  name: 'app',
  store,
  components: {
    Input,
    Display
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
