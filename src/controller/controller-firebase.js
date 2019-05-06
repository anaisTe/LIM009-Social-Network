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

//CERRAR SESION---------------------------
export const log_Out = () =>{
    return firebase.auth().signOut()
}