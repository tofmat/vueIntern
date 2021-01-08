<template>
  <div id="app">
    <div class="bigContainer max-auto flex justify-end items-center h-screen w-full absolute mr-5">
      <div class="contain">
        <div class="sideNav">
          <div class="box-content">
            <div class="links">
              <div class="linkSpace">
                <a class="" :href=info.social_media.instagram><i class="fab fa-instagram fa-3x"></i></a>
              </div>
              <div class="linkSpace">
                <a class="" :href=info.social_media.twitter><i class="fab fa-twitter fa-3x"></i></a>
              </div>
              <div class="linkSpace">
                <a class="" :href=info.social_media.snapchat><i class="fab fa-snapchat fa-3x"></i></a>
              </div>
              <div class="linkSpace">
                <a :href=info.social_media.email><i class="fas fa-envelope-square fa-3x"></i></a>
              </div>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    Home
  },
  computed: {
    ...mapGetters({
        info: 'info/info'
    })
  },
  methods: {
    ...mapActions({
      getInfo: 'info/getInfo'
    }),
  },
  created() {
    this.getInfo();
  }
}
</script>

<style>
.links i {
  color: white;
}
.linkSpace{
  margin: 30px 0;
}
.bigContainer{
  max-width: 1280px;
}
.links{
  margin-right: 50px
}
.mr-5{
  margin-right: 5px;
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
