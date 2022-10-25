<template>
  <div>
    <Default v-if="$store.state.isAuth"></Default>
    <Guest v-else-if="$route.meta.guestGuard"></Guest>
    <Auth v-else></Auth>
  </div>
</template>

<script>
import Default from "./layouts/Default.vue";
import Auth from "./layouts/Auth.vue";
import Guest from "./layouts/Guest";

export default {
  name: "App",
  components: {
    Default,
    Auth,
    Guest,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
.v-toolbar__content {
  width: 100% !important;
}
</style>
