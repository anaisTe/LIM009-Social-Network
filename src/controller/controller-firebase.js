import { getData } from "../view_controller.js"
import{getUsername}from "../view_controller.js"

// CREAR CUENTA--------------------------------------------------------------------------
export const newUser = (email,password) =>{
     return firebase.auth().createUserWithEmailAndPassword(email, password)
 }
 //LOGIN --------------------------------------------------------------------------------
export const logIn = (email,password) =>{
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
   return firebase.auth().signInWithEmailAndPassword(email, password)

}
//LOGIN CON FACEBOOK----------------------------------------------------------------------
export const log_Fb = () =>{
  let auth = firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  })
  .catch(function(error) {
    var errorMessage = error.message;
    console.log(errorMessage);
  });
  return auth
}
//LOGIN CON GOOGLE------------------------------------------------------------------------
export const log_Goog = () =>{
  let auth = firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  })
  .catch(function(error) {
    var errorMessage = error.message;
    console.log(errorMessage);
  });
  return auth
}
//SET USER TO FIRESTORE T2-------------------------------------------------------------------------------
export const setUser = (userId, nameUser, emailUser) => {
  var firestore = firebase.firestore().collection("users").doc(userId).set({
      name: nameUser,
      email: emailUser,
      photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      });
  return firestore
}
// print user name in profile section-----------------------------------------------------------------
 export const getFirestore = (userId) => {
  return firebase.firestore().collection("users").doc(userId).get();
}
//add new collection named 'notes'--------------------------------------------------------------------
export const publish = (publishBy, publishText,visibility) => {
  //count += 2;
  var firestore = firebase.firestore().collection("notes").doc().set({
      publishBy: publishBy,
      publishText: publishText,
      state: visibility
  });
  return firestore
}
//TOMA EL VALOR DEL POST --------------------------------------------------------------------------
 export const set_Publication = () => {
   firebase.auth().onAuthStateChanged(function(user) {
     if(user){
       let post= document.querySelector('#post');
       let visibility = document.querySelector('#select_post').value; 
       getUsername(user, post.value,visibility);
       post.value = "";
       alert("Publicación exitosa!");
     }
   });
 }
//ADDING NOTES--------------------------------------------------------------------------------------
export const view_publish = (callback) => {
  let user = firebase.auth().currentUser;
firebase.firestore().collection("notes")
  // .orderBy('date', 'desc')
  .onSnapshot((querySnapshot) => {
    let data = [];
    querySnapshot.forEach((doc) => {
      const arrData = {
        id: doc.id,
        data: doc.data()
      };
        data.push(arrData);
         if (doc.data().state === "public") {
         }  
        })
    callback(data);
  })
 };
//deleting notes----------------------------------------------------------
export const delete_Notes = (id) =>{ 
  firebase.firestore().collection("notes").doc(id).delete()
}
//ACTUALIZA LA NOTA EDITADA------------------------------------------------
export const new_note_edit = ()=>{
  const note_updated = document.querySelector(`#note-${id}`).value;
  firebase.firestore().collection("notes").doc(id).update({
    publishText: note_updated
  });
}
//get username by its uid--------------------------------------------------
export const getName = (userId) => {
  return firebase.firestore().collection("users").doc(userId).get()
}
//OBSERVADOR---------------------------------------------------------------
export const observer_user = () =>{
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      getData(user.uid);
    }
  });
}
//CERRAR SESION-------------------------------------------------------------
export const log_Out = () =>{
  return firebase.auth().signOut()
}