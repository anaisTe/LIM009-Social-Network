import { getData, getUsername } from "../view_controller.js"
let count = 0;

// CREAR CUENTA-------------------------------
export const newUser = (email,password) =>{
     return firebase.auth().createUserWithEmailAndPassword(email, password)
 }
// print user name in profile sectionx
 export const getFirestore = (userId) => {
  return firebase.firestore().collection("users").doc(userId).get();
}

// export const getNotesFirestore = () => {
//   return firebase.firestore().collection("notes").get();
// }

//INICIAR SESIÓN-------------------------------
export const logIn = (email,password) =>{
     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    /*.then(() => {*/
      return firebase.auth().signInWithEmailAndPassword(email, password)
    /*})
    .catch((error) => {
      alert(error, "Intente nuevamente, datos erroneos");
    })

    return auth*/
}

//LOGIN CON FACEBOOK---------------------------
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

//LOGIN CON GOOGLE---------------------------
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

export const observer_user = () =>{
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      getData(user.uid);
    }
  });
}

export const setPublication = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      let post= document.querySelector('#post');
      getUsername(user, post.value);
      post.value = "";
      alert("Publicación exitosa!");
    }
  });
}

//SET USER TO FIRESTORE
export const setUser = (userId, nameUser, emailUser) => {
    var firestore = firebase.firestore().collection("users").doc(userId).set({
        name: nameUser,
        email: emailUser,
        photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        });
    return firestore
}

//add new collection named 'notes'
export const publish = (publishBy, publishText) => {
  //count += 2;
  var firestore = firebase.firestore().collection("notes").doc().set({
      publishBy: publishBy,
      publishText: publishText
  });
  return firestore
}
//-AGREGAR NOTAS----------------------------------
// export const addNote =() =>{
//   firebase.firestore().collection("notes")
//   .onSnapshot((querySnapshot) => {
//   querySnapshot.forEach(function(doc) {
//     template_notes ()
//   //console.log(doc.id, " => ", doc.data());
//   });
// })
// }


//deleting notes
export const delete_Notes = (id) =>{ 
  firebase.firestore().collection("notes").doc(id).delete()
}
export const edit_Note = (id) => {
  document.querySelector(`#note-${id}`).readOnly = false;
  document.querySelector(`#like-${id}`).style.display = 'none';
  document.querySelector(`#edit-${id}`).style.display = 'none';
  document.querySelector(`#save-${id}`).className += 'show-save';
}

export const save_Note = (id) => {
  document.querySelector(`#note-${id}`).readOnly = true;
  document.querySelector(`#like-${id}`).style.display = 'block';
  document.querySelector(`#edit-${id}`).style.display = 'block';
  document.querySelector(`#save-${id}`).className += 'hide-save';
  const note_updated = document.querySelector(`#note-${id}`).value;
  firebase.firestore().collection("notes").doc(id).update({
    publishText: note_updated
  });
}

//get username by its uid
export const getName = (userId) => {
  return firebase.firestore().collection("users").doc(userId).get()
}
//CERRAR SESION---------------------------
export const log_Out = () =>{
    return firebase.auth().signOut()
}


//NOTAS--------------------------------------
/*export const addNote = (textNewNote) =>{
  const note_create = firebase.firestore().collection('notes').add({
    title: textNewNote,
    state: false
})
return note_create
}

export const notes = (callback) =>{
  const view_notes =firebase.firestore().collection('notes')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
   
})
return view_notes
}*/