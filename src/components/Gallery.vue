<template>
  <div class="gallery-container">
    <section class="gallery">
      <div class="gallery__item">
        <input
          type="radio"
          id="img-1"
          checked
          name="gallery"
          class="gallery__selector"
        />
        <img class="gallery__img" src="../assets/images/1200x-1.jpg" alt="" />
        <label for="img-1" class="gallery__thumb"
          ><img
            src="../assets/images/1200x-1.jpg"
            alt=""
            width="150px"
            height="100px"
        /></label>
      </div>
      <div class="gallery__item">
        <input
          type="radio"
          id="img-2"
          name="gallery"
          class="gallery__selector"
        />
        <img class="gallery__img" src="../assets/images/boruto.jpeg" alt="" />
        <label for="img-2" class="gallery__thumb"
          ><img
            src="../assets/images/boruto.jpeg"
            width="150px"
            height="100px"
            alt=""
        /></label>
      </div>
      <div class="gallery__item">
        <input
          type="radio"
          id="img-3"
          name="gallery"
          class="gallery__selector"
        />
        <img class="gallery__img" src="../assets/images/God.jpeg" alt="" />
        <label for="img-3" class="gallery__thumb"
          ><img
            src="../assets/images/God.jpeg"
            width="150px"
            height="100px"
            alt=""
        /></label>
      </div>
    
    </section>
  </div>
</template>
<style lang="scss">
* {
  box-sizing: border-box;
}

.gallery-container {
  padding: 60px 30px 0;
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
  .gallery__img {
    height: 400px;
    width: 600px;
  }

  .gallery__thumb {
    position: relative;
    top: -40rem;
  }

  .gallery__thumb img {
    height: 100px;
  }
  @media screen and (max-width: $max-img-width) {
    padding-top: $max-img-height;

    .gallery__thumb {
      position: relative;
      top: -6rem;
    }
    .gallery__thumb img {
      height: 70px;
    }
    .gallery__img {
      height: 305px;
    }
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    height: 305px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &__thumb {
    padding-top: 6px;
    margin: 6px;
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
<script></script>
