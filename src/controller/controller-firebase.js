// CREAR CUENTA-------------------------------
export const newUser = (email,password) =>{
     return firebase.auth().createUserWithEmailAndPassword(email, password)
 }

//INICIAR SESIÓN-------------------------------
export const logIn = (email,password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

//LOGIN CON FACEBOOK---------------------------
export const log_Fb = () =>{
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}

//LOGIN CON GOOGLE---------------------------
export const log_Goog = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}

export const observer_user = () =>{
    return firebase.auth().onAuthStateChanged();
}

//SET USER TO FIRESTORE
export const setUser = (userId, nameUser, emailUser) => {
    var firestore = firebase.firestore().collection("users").doc(userId).set({
        name: nameUser,
        email: emailUser
        });
    return firestore
}
export const getUser = () => {
    return firebase.auth().currentUser;
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