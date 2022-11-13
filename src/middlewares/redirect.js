import store from "../store";
export default (to, from, next) => {
  if (store.state.isAuth) {
    if (to.name == "create") {
      next("/");
      return;
    }
  } else {
    next();
    return;
  }
  next();
};
