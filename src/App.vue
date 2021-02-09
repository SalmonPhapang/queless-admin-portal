<template>
  <v-app id="app">
<Home></Home>
  </v-app>
</template>
<script lang="ts">

//import Home from './components/HelloWorld.vue';
import Home from "@/views/Home.vue";
export default {

  components: {
    Home
  },
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    gotoClients () {
     // this.router.push({name: '/clients'})
    }
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
