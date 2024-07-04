<template>
  <div id="app">
    <MengenlehreuhrClock  />
  </div>
</template>

<script>
import MengenlehreuhrClock  from './components/MengenlehreuhrClock.vue';

export default {
  name: 'App',
  components: {
    MengenlehreuhrClock 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
