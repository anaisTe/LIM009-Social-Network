import { changePage } from "./router/router.js";

const init = () =>{
    changePage(window.location.hash);
    window.addEventListener('hashchange', ()=> changePage(window.location.hash));
}
window.addEventListener('load', init);