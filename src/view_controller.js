import {newUser,logIn,log_Fb, log_Goog} from './controller/controller-firebase.js'

/*REGISTRO DE USUARIO--------------------------------*/
 export const registry = ()=>{
    let email =document.querySelector("#email").value;
    let password = document.querySelector("#contraseña").value;
    
    newUser(email,password)
     .then((res)=> console.log(res.displayname))
     .catch(()=>console.log("error"))
}
  
  /* USUARIOS REGISTRADOS------------------------------*/
  
 export const userLogin =() =>{
    let email2 = document.querySelector("#email2").value;
    let password2 = document.querySelector("#contraseña2").value;
 
    logIn(email2,password2)
     .then((res)=>console.log('si se pudo'))
     .catch(()=>console.log("error1"))
}
  
  /*inicio FB-----------------------------------------*/
 export const authFacebook = () => {
  log_Fb()
  .then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("user: ", user);

    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log("error: ", credential);
    // ...
  }); 
}
  /*inicio google-----------------------------------------*/
export const authGoogle = () =>{
  log_Goog()
  .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("user: ", user); 
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log("error: ", errorMessage);
    // ...
  });
}




    /*OBSERVADOR -----------------------------------------*/
//   const observer = () =>{
//     firebase.auth().onAuthStateChanged(function(user) {
//       if (user) {
//         console.log("existe usuario activo");
//         aparece();
  
        /* PARA ACCEDER AL DATOS DEL USUARIO---------- */
    //     var displayName = user.displayName;
    //     console.log(displayName);
    //     var email = user.email;
    //     console.log(email);
    //     var emailVerified = user.emailVerified;
    //     var photoURL = user.photoURL;
    //     console.log(photoURL);
    //     var isAnonymous = user.isAnonymous;
    //     var uid = user.uid;
    //     var providerData = user.providerData;
    //     // ...
    //   } else {
        // User is signed out.
        // console.log("no existe usuario activo");
//       }
//     });
//   }
//   observer();
  
  /* APARECE SOLO PARA EL USUARIO REGISTRADO */
//    const aparece = () => {
//      let contenido = document.getElementById("contenido");
//      contenido.innerHTML="solo lo ve usuario activo";
//    }