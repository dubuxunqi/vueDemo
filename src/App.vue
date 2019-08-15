<template>
  <div id="app">
    <v-top></v-top>
    <router-view/>
    <v-bottom></v-bottom>
  </div>
</template>
<script>
import top from './components/Top'
import bottom from './components/Bottom'
export default {
  name: 'App',
  components:{
    "v-top":top,
    "v-bottom":bottom
  }
}
</script>
<style>

</style>
