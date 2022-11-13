import store from "../store";
export default (to, from, next) => {
  if (store.state.isAuth) {
    next();
    return true;
  } else {
    next("/login");
    return;
  }
};
