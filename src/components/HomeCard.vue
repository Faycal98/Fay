<template>
  <div class="card p-4">
    <div class="avatar-container flex items-center">
      <div class="user-info flex items-center">
        <v-avatar size="56">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>

        <div class="user-detail ml-3">
          <h1 class="text-base font-medium">Dan walker</h1>
          <span class="time"> July 26 2018, 01:03pm </span>
        </div>
      </div>

      <v-menu offset-y bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon color="black" v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" link>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="post-text mt-4">
      <p class="">
        Yesterday with @Karen Miller and @Marvin Stemperd at the #Rock'n'Rolla
        concert in LA. Was totally fantastic! People were really excited about
        this one!
      </p>
    </div>
    <div class="img-blog">
      <img src="../assets/images/sao.jpeg" alt="" />
    </div>
    <div class="card-footer mt-5 flex justify-between items-center">
      <div class="likers">
        <div class="liker-group ">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />

          <img src="../assets/images/dan.jpg" alt="John" />
          <img src="../assets/images/milly.jpg" alt="John" />
        </div>

        <div class="likers-text ml-1">
          <p class="mb-0">
            <a href="#">Milly</a>,
            <a href="#">David</a>
          </p>
          <p>and 23 more liked this</p>
        </div>
      </div>

      <div class="like">
        <font-awesome-icon
          class="text-2xl text-black"
          icon="fa-regular fa-thumbs-up"
        />
        14
      </div>
      <div class="comment">
        <font-awesome-icon
          class="text-2xl text-black"
          icon="fa-solid fa-comments"
        />
        30
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: "Click Medhjdjdjjduddudu" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>
<style scoped>
.card {
  border-radius: 9px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}
.img-blog img {
  border-radius: 8px;
}

.post-text p {
  color: #757a91;
  font-size: 0.9rem;
}
.time {
  font-size: 0.9rem;
  color: #999;
}

.liker-group img {
  height: 38px;
  width: 38px;
  border-radius: 50%;
}


.liker-group img:not(:first-child){
  margin-left: -12px;
}


.likers-text a{
  color: #393a4f;
    font-weight: 500;
}


.likers-text{
  font-size: .8rem;
    color: #888da8;
}
.liker-group,.likers{
  display: flex;
}
</style>
