import template1 from "./templates/template1.js";
import template2 from "./templates/template2.js";
// import template3 from "./templates/template3.js";
import { changePage } from "./router/router.js";


export const init = () => {
  const config = {
    apiKey: "AIzaSyAhtQF4JMu82JkwJm1gEWmF9R1SVRFTrZE",
    authDomain: "usuarios-5e0f2.firebaseapp.com",
    databaseURL: "https://usuarios-5e0f2.firebaseio.com",
    projectId: "usuarios-5e0f2",
    storageBucket: "usuarios-5e0f2.appspot.com",
    messagingSenderId: "123552744377"
  };
  firebase.initializeApp(config);
};
init();

const main = document.getElementById("main");
main.appendChild(template1());

const registrate = document.querySelector("#registrate");
registrate.addEventListener("click", () => {
  main.innerHTML = " ";
  main.appendChild(template2());
});



const init_2 = () =>{
    changePage(window.location.hash);
    window.addEventListener('hashchange', ()=> changePage(window.location.hash));
}
window.addEventListener('load', init_2);

// const btn_logOut = document.querySelector('#logOut');
// btn_logOut.addEventListener('click',()=>{
//   main.innerHTML=' ';
//   main.appendChild( template3());
// });