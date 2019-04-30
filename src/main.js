// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
// import firebase from 'firebase';
const init = () =>{
  const config = {
  apiKey: "AIzaSyAhtQF4JMu82JkwJm1gEWmF9R1SVRFTrZE",
  authDomain: "usuarios-5e0f2.firebaseapp.com",
  databaseURL: "https://usuarios-5e0f2.firebaseio.com",
  projectId: "usuarios-5e0f2",
  storageBucket: "usuarios-5e0f2.appspot.com",
  messagingSenderId: "123552744377"
};
firebase.initializeApp(config);
}

window.onload = init();