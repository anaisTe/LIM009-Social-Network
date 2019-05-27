import {newUser,logIn,log_Fb, log_Goog, log_Out} from './controller/controller-firebase.js'
import { regCloudFirebase } from "./templates/template2.js";
import { getFirestore, publish, getName } from "./controller/controller-firebase.js"

/*REGISTRO DE USUARIO--------------------------------*/
export const registry = ()=>{
    let email =document.querySelector("#email").value;
    let password = document.querySelector("#contraseña").value;
    
    newUser(email,password)
     .then(()=>{
      window.location.hash = '#/perfil'
      //SET USER TO FIRESTORE
      var user = firebase.auth().currentUser;
      regCloudFirebase(user, false);
      console.log('Hola ', user.uid);
    })
     .catch((error)=>console.log(error.message))
}
  
  /* USUARIOS REGISTRADOS------------------------------*/
  
 export const userLogin =() =>{
    let email2 = document.querySelector("#email2").value;
    let password2 = document.querySelector("#contraseña2").value;
 
    logIn(email2,password2)
     .then(()=>{ 
        window.location.hash = '#/init'
        var user = firebase.auth().currentUser;
    }).catch(()=>alert("Intente nuevamente, datos erroneos"))
}
  
  /*inicio FB-----------------------------------------*/
 export const authFacebook = () => {
  log_Fb()
    .then(function(result) {
      window.location.hash="#/init";
      var token = result.credential.accessToken;
      var user = firebase.auth().currentUser;
      regCloudFirebase(user, true);
      console.log("token: ", token,"; user logeado ", user);
    }).catch(function(error) {
      var errorMessage = error.message;
      console.log("error: ", errorMessage);
    });
}
  /*inicio google-----------------------------------------*/
export const authGoogle = () =>{
  log_Goog()
  .then(()=>{
    window.location.hash="#/init";
    var user = firebase.auth().currentUser;
    regCloudFirebase(user, true);
  }).catch(function(error) {
    var errorMessage = error.message;
    console.log("error: ", errorMessage);
    // ...
  });
}

// print user name in temp3
export const getData = (uid) => {
  getFirestore(uid)
  .then(function(doc) {
    // window.location.hash="#/init";
    if(doc.exists){
      let username = document.querySelector('#username');
      let avatar = document.querySelector('#avatar');
      username.innerHTML = doc.get("name");
      console.log(doc.get("photo"));
      avatar.src = doc.get("photo");
    }else{
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error :", error.message);
  });
}


//add notes
const addPublication = (publishBy, publishText) => {
  publish(publishBy, publishText)
  .then(()=>{
    console.log("Publicación exitosa");
  })
   .catch((error)=>console.log("error: ", error.message));
}

//notes written by user and adding its name
export const getUsername = (user, publishText) => {
  let name;
  getName(user.uid)
  .then(function(doc) {
    if(doc.exists){
      name = doc.get("name");
      console.log("publishBy: ", name);
      if(typeof user.displayName == "object"){
        addPublication(name, publishText);
      }else{
        addPublication(user.displayName, publishText);
      }
    }else{
      console.log("No se pudo obtener el nombre");
    }
    return name
  }).catch(function(error) {
    console.log("Error getting document:", error.message);
  });
}

/*CERRAR SESSION -----------------------------------------*/
export const close_init = () =>{
  log_Out()
  .then(()=>{
    console.log("pudiste cerrar sesion")
  })
  .catch(function(error){
    console.log('no pudiste cerrar sesion');   
  })
}
