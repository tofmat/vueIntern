<template>
  <div class="mainDiv">
    <div class="flexx">
      <div class="title">
        <h1>{{info.name}}</h1>
      </div>
      <div class="image">
        <img src="../assets/img.png" alt="Woman">
      </div>
      <div class="menuLinks">
        <a href="#"><h2>HOME</h2></a>
        <h2><a href="#">ABOUT</a></h2>
        <div class="menuImage">
          <img src="../assets/menuImage.png" alt="Menu Image">
        </div>
        <h2><a href="#">GALLERY</a></h2>
        <h2><a href="#">CONTACT</a></h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
        info: 'info/info'
    })
  }

}
</script>

<style>
.mainDiv{
  padding-top: 60px;
  padding-bottom: 20px;
  min-height: 100vh;  
  background: linear-gradient(90deg, rgb(182,2,79) 50%, rgb(199, 35, 102) 50%);
}
.title{
  padding-bottom: 50px; 
}
.title h1 {
  color: white;
  font-weight: 200;
  letter-spacing: 15px
}
.flexx{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.image{
  background-color: rgb(199, 35, 102);
  box-shadow: 6px 6px 8px 4px rgba(115, 64, 100, 0.3), -3px -3px 10px 4px rgba(115, 64, 100, 0.3);
  margin: 0;
  padding: 0;
}


.image img {
  margin-top: 10rem;
}

.menuLinks{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 5rem;
  width: 70%;
  color: white;
}
.menuLinks h2 {
  font-weight: 200;
  letter-spacing: 5px;
}
.menuImage img{
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.menuLinks a{
  color:white;
  text-decoration: none;
  cursor: pointer;
}

@media (max-width: 600px) {
  .image{
    width: 100%
  }
  .image img {
    width: 100%;
  }
  .menuLinks{
    flex-direction: column;
  }
}

</style>
