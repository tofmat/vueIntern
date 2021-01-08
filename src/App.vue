<template>
  <div id="app">
    <div class="bigContainer max-auto flex h-screen w-full">

    </div>
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
.bigContainer{
  max-width: 1280px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.flex{
  display: flex;
}
.h-screen{
  height: 100vh;
}
.w-full{
  width: 100%;
}

</style>
