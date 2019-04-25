// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
import firebase from 'firebase';
let config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
  };
  firebase.initializeApp(config);

  /*REGISTRO DE USUARIO--------------------------------*/
const resgistry =document.getElementById("register");
resgistry.addEventListener("click",()=>{

  let email =document.getElementById("email").value;
  let contraseña = document.getElementById("contraseña").value;
  
  firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      
      // ...
    });
})

/* USUARIOS REGISTRADOS------------------------------*/
const entry = document.getElementById("ingreso");
entry.addEventListener("click",()=>{
  let email2 = document.getElementById("email2").value;
  let contraseña2 = document.getElementById("contraseña2").value;

  firebase.auth().signInWithEmailAndPassword(email2, contraseña2).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
})

/*OBSERVADOR -----------------------------------------*/
const observer = () =>{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("existe usuario activo");
      aparece();

      /* PARA ACCEDER AL DATOS DEL USUARIO---------- */
      var displayName = user.displayName;
      console.log(displayName);
      var email = user.email;
      console.log(email);
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      console.log(photoURL);
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("no existe usuario activo");
      // ...
    }
  });
}
observer();

/* APARECE SOLO PARA EL USUARIO REGISTRADO */
 const aparece = () => {
   let contenido = document.getElementById("contenido");
   contenido.innerHTML="solo lo ve usuario activo";
 }