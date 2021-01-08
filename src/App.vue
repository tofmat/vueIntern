<template>
  <div id="app">
    <div class="bigContainer max-auto flex justify-end items-center h-screen w-full absolute">
      <div class="contain">
        <div class="sideNav">
          <div class="overflow-y-auto box-content">
            <div>
              <p class="logo font-semibold ml-6 text-left text-base">Hey</p>
              <p class="logo font-semibold ml-6 text-left text-base">Hey</p>
              <p class="logo font-semibold ml-6 text-left text-base">Hey</p>
            </div>
          </div>
        </div>
      </div>
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
.ml-5{
  margin-left: 5px;
}
.box-content{
  box-sizing: content-box;
}
.justify-end{
  justify-content: flex-end
}
.overflow-y-auto{
  overflow-y: auto;
}
.items-center{
  align-items: center;
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
.absolute{
  position: absolute;
}
</style>
