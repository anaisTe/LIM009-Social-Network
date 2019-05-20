import {newUser,logIn,log_Fb, log_Goog, observer_user, log_Out} from './controller/controller-firebase.js'
import { regCloudFirebase } from "./templates/template2.js";
import { getFirestore, publish, getName, getNotesFirestore } from "./controller/controller-firebase.js"

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

export const getNotes = () => {
  getNotesFirestore()
  .then(function(querySnapshot) {
    let publish_note=" "; 
    querySnapshot.forEach(function(doc) {
      const view_note =document.querySelector("#view_note");
      //document.queryrySelector("#publishBy").innerHTML = doc.data().publishBy;
      //document.querySelector("#note").innerHTML = doc.data().publishText;
     publish_note +=`<div class="col-xs-12 col-lg-12 box-post">
    <div class="col-xs-12 col-lg-12 box-remove">
        <h5 id="publishBy" class="col-xs-9 col-lg-9 h5">${doc.data().publishBy}</h5>
        <div id="deleteNote" class="col-xs-3 col-lg-3 img-remove">
            <img src="image/delete.svg" alt="eliminar">
        </div>
    </div>
    <div class="col-xs-12 col-lg-12 h5 post">
        <h5 id="note">${doc.data().publishText}</h5>    
    </div>
    <div class="col-xs-12 col-lg-12 h5 edit">
        <img alt="like"> <img alt="editar">
    </div>
</div>` ;
    view_note.innerHTML=publish_note;

      console.log(doc.id, " => ", doc.data());
    });
  }).catch(function(error) {
    console.log("Error :", error.message);
  });
}

//add notes
export const setPublication = (publishBy, publishText) => {
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
        setPublication(name, publishText);
      }else{
        setPublication(user.displayName, publishText);
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
