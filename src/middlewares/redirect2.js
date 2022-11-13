import store from "../store";
export default (to, from, next) => {
  if (store.state.isAuth) {
    next("/");
    return;
  } else {
    next();
    return;
  }
};
