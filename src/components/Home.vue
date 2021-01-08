<template>
  <div class="mainDiv">
    <div class="flexx">
      <div class="title">
        <h3>AQUILA AVEION</h3>
      </div>
      <div class="image">
        <img src="../assets/img.png" alt="Woman">
      </div>
      <div class="menuLinks">
        <h2>Home</h2>
        <h2>About</h2>
        <div class="menuImage">
          <img src="../assets/menuImage.png" alt="Menu Image">
        </div>
        <h2>Gallery</h2>
        <h2>Contact</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  

}
</script>

<style>
body{
  margin: 0;
}
.mainDiv{
  padding: 70px;
  min-height: 100vh;  
  background: linear-gradient(90deg, rgb(182,2,79) 50%, rgb(199, 35, 102) 50%);
}
.title{
  padding-bottom: 50px; 
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
}
.menuImage img{
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

</style>
