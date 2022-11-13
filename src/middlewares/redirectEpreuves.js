import store from "../store/index";
export default(to,from,next)=>{
    const idCourse =to.params.id
    const findCourse = store.getters.getCourseByID(idCourse)
    console.log(findCourse)
    if(!findCourse.active){
        next({ name: 'home' })
    }else{
        next()
    }
}