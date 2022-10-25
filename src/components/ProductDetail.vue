<template>
  <v-container class="mt-4">
    <v-row>
      <v-col
        class="flex items-center mt-5 justify-center p-5"
        md="12"
        cols="12"
      >
        <div class="main">
          <div class="card mb-8">
            <div class="card__title">
              <font-awesome-icon
                icon="fa-solid fa-reply"
                class="text-2xl text-gray-500 mr-3"
               
              />
              go gack
            </div>
            <div class="card__body">
              <div class="half">
                <div class="featured_text"></div>
                <div class="image">
                  <img src="../assets/images/boruto.jpeg" alt="" />
                </div>
              </div>
              <div class="half">
                <h1 class="mt-4">Boruto</h1>
                <div class="reviews mb-3">
                  <ul class="stars">
                    <v-rating
                      v-model="ratings"
                      color="orange"
                      dense
                      size="18"
                      half-increments
                      background-color="orange lighten-3"
                    ></v-rating>
                  </ul>
                  <span>(64 reviews)</span>
                </div>
                <p class="price">$210.00</p>
                <div class="description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <!--   <span class="stock"><i class="fa fa-pen"></i> In stock</span> -->
              </div>
            </div>
            <div class="card__footer">
              <div class="recommend">
                <p>Publié par</p>
                <h3>
                  <v-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    /> </v-avatar
                  >Andrew Palmer
                </h3>
              </div>
              <div class="action">
                <button type="button">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      ratings: 3,
    };
  },
  computed: {
    isMobile() {
      return (
        this.$vuetify.breakpoint.width < this.$vuetify.breakpoint.thresholds.md
      );
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One|Montserrat:300,400,700,800|Open+Sans:300");

.main {
  width: 700px;
}
@media only screen and (max-width: 600px) {
  .main {
    width: 90% !important;
  }
  .card {
    .card__title {
      display: flex;
      align-items: center;
      padding: 10px 30px !important;
    }

    .card__footer {
      padding: 13px 14px !important;
    }
    .card__body {
      padding: 0px !important;
      flex-direction: column;
      margin-bottom: 0 !important;
      .description {
        margin-bottom: 3px !important;
        p {
          line-height: 24px !important;
          font-size: 14px !important;
        }
      }
      .image {
        padding-top: 0px !important;
        img {
          height: 167px !important;
          width: 100%;
        }
      }
      .half {
        h1 {
          font-size: 14px;
          margin: 0px;
        }
        .reviews {
          margin-bottom: 0 !important;
        }
        .price {
          margin-bottom: 0px !important;
        }
      }
    }
  }
}
.card {
  box-shadow: 2px 2px 6px rgba(#000, 0.3);
  transition: 200ms;
  background: #fff;

  .card__title {
    display: flex;
    align-items: center;
    padding: 10px 30px;

    h3 {
      flex: 0 1 200px;
      text-align: right;
      margin: 0;
      color: #252525;
      font-family: sans-serif;
      font-weight: 600;
      font-size: 20px;
      text-transform: uppercase;
    }

    .back {
      font-size: 20px;
      font-weight: 700;
    }
    .icon {
      flex: 1 0 0px;
      background: #115dd8;
      color: #fff;
      padding: 10px 10px;
      transition: 200ms;

      > a {
        color: #fff;
      }

      &:hover {
        background: #252525;
      }
    }
  }

  .card__body {
    padding: 0 20px;
    display: flex;
    flex-flow: row no-wrap;
    margin-bottom: 25px;

    > .half {
      box-sizing: border-box;
      padding: 0 15px;
      flex: 1 0 50%;
    }
    h1 {
      color: #252525;
      margin: 8px 0;
      font-family: sans-serif;
      font-weight: 600;
      font-size: 20px;
      text-transform: uppercase;
    }
    .featured_text {
      h1 {
        margin: 0;
        padding: 0;
        font-weight: 800;
        font-family: "Montserrat", sans-serif;
        font-size: 30px;
        line-height: 50px;
        color: #181e28;
      }

      p {
        margin: 0;
        padding: 0;

        &.sub {
          font-family: "Montserrat", sans-serif;
          font-size: 26px;
          text-transform: uppercase;
          color: #686e77;
          font-weight: 300;
          margin-bottom: 5px;
        }

        &.price {
          font-family: "Fjalla One", sans-serif;
          color: #252525;
          font-size: 26px;
        }
      }
    }

    .image {
      padding-top: 15px;
      width: 100%;

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }

    .description {
      margin-bottom: 25px;

      p {
        margin: 0;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        line-height: 27px;
        font-size: 16px;
        color: #555;
      }
    }

    span.stock {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      color: #a1cc16;
    }

    .reviews {
      .stars {
        display: inline-block;
        list-style: none;
        padding: 0;

        > li {
          display: inline-block;

          .fa {
            color: #f7c01b;
          }
        }
      }

      > span {
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        margin-left: 5px;
        color: #555;
      }
    }
  }

  .card__footer {
    padding: 30px 40px;
    display: flex;
    flex-flow: row no-wrap;
    align-items: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 12px;
      width: calc(100% - 40px);
      height: 3px;
      background: #115dd8;
      background: linear-gradient(
        to right,
        #115dd8 0%,
        #115dd8 20%,
        #ddd 20%,
        #ddd 100%
      );
    }

    .recommend {
      flex: 1 0 10px;

      p {
        margin: 0;
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        color: #555;
      }

      h3 {
        margin: 0;
        font-size: 20px;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        color: #115dd8;
      }
    }

    .action {
      button {
        cursor: pointer;
        border: 1px solid #115dd8;
        padding: 14px 30px;
        border-radius: 200px;
        color: #fff;
        background: #115dd8;
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        transition: 200ms;

        &:hover {
          background: #fff;
          color: #115dd8;
        }
      }
    }
  }
}
</style>
