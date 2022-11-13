import auth from "./auth";
import redirect from "./redirect";


export default function(to,from,next){
    if (to.meta.requiresAuth) {
        auth(to,from,next)
    }
    else{
        redirect(to,from,next)
    }
 
}