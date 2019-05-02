import {logInFb,newUser,logIn} from './controller/controller-firebase.js'

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
     .catch(()=>console.log("error"))
}
  
  /*inicio FB-----------------------------------------*/
 export const authFacebook = () => {
  logInFb()
     .then((res)=>console.log(res.user.displayName))
     .catch(()=>console.log(error.message))
      
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