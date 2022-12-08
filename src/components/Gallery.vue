<template>

<section class="gallery">
  <div class="gallery__item">
    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="../assets/images/1200x-1.jpg" alt=""/>
    <label for="img-1" class="gallery__thumb"><img src="../assets/images/1200x-1.jpg" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="../assets/images/boruto.jpeg" alt=""/>
    <label for="img-2" class="gallery__thumb"><img src="../assets/images/boruto.jpeg" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="../assets/images/God.jpeg" alt=""/>
    <label for="img-3" class="gallery__thumb"><img src="../assets/images/God.jpeg" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-4" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="../assets/images/Soma.jpeg" alt=""/>
    <label for="img-4" class="gallery__thumb"><img src="../assets/images/Soma.jpeg" alt=""/></label>
  </div>
</section>
</template>
<style lang="scss">
* {
  box-sizing: border-box;
}

$max-img-width: 600px;
$max-img-height: 400px;

img {
  max-width: 100%;
  vertical-align: top;
}

.gallery {
  display: flex;
    margin: 10px auto;
    max-width: $max-img-width;
    position: relative;
    padding-top: $max-img-height/$max-img-width * 100%;
    
    @media screen and (min-width: $max-img-width){
      padding-top: $max-img-height;
    }
  
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
   &__thumb {
    padding-top: 6px;
    margin: 6px;
    width: 150px;
    height: 150px;
    display: block;
  }
  
  &__selector {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    
    &:checked {
      + .gallery__img {
        opacity: 1;
      }
      ~ .gallery__thumb > img {
        box-shadow: 0 0 0 3px #0be2f6;
        
       
      }
    }
  }
  
 
}

</style>
<script>
</script>