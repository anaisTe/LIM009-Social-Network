//import template1 from "./templates/template1.js";
//import template2 from "./templates/template2.js";
//import template3 from "./templates/template3.js";
//import { changePage } from "./router/router.js";

import {router_Main} from "./router/router-main.js"

export const init = () => {
  var app = firebase.initializeApp({
    apiKey: "AIzaSyDsAk8goTY1C0B5UZ63rsfaE1lMx3JmPc0",
    authDomain: "login-with-goog.firebaseapp.com",
    databaseURL: "https://login-with-goog.firebaseio.com",
    projectId: "login-with-goog",
    storageBucket: "login-with-goog.appspot.com",
    messagingSenderId: "29201761866"
  });
  firebase.firestore(app);
  router_Main();
};

window.onload = () => {
  init();
  
}

/*const main = document.getElementById("main");
main.appendChild(template1());*/

/*const registrate = document.querySelector("#registrate");
registrate.addEventListener("click", () => {
  main.innerHTML = " ";
  main.appendChild(template2());
});*/

/*const btn_logOut = document.querySelector('#logOut');
 btn_logOut.addEventListener('click',()=>{
   main.innerHTML=' ';
   main.appendChild( template1());
  });*/