import { changePage } from "../router/router.js";

export const router_Main = () =>{
   window.addEventListener("load",changePage(window.location.hash))
   if(("onhashchange" in window)) window.onhashchange = () =>changePage(window.location.hash)
}