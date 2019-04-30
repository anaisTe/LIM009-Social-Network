// CREAR CUENTA-------------------------------
export const newUser = (email,password) =>{
     return firebase.auth().createUserWithEmailAndPassword(email, password)
 }

//INICIAR SESIÓN-------------------------------
export const logIn = (email,password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

//LOGIN CON FACEBOOK---------------------------
export const logInFb = () =>{
    const provider = new firebase.auth.FacebookAuthProvider();
    return  firebase.auth().signInWithRedirect(provider);
}