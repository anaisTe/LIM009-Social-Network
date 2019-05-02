// importamos la funcion que vamos a testear
// import MockFirebase from '../_mocks_/firebase-mocks.js'
// global.firebase = MockFirebase();
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();
const mockprovider = new firebasemock.MockFirebase();
mockprovider.autoFlush();


global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore,
  () => mockprovider
);


import { newUser, logIn, logInFb } from "../src/controller/controller-firebase.js";

describe('newUser', () => {
  it('debería poder registrarse con email: jackelyne123@gmail.com y password: 123456', () => {
    return newUser('jackelyne123@gmail.com', '123456')
    .then((user)=>{
      expect(user.email).toBe('jackelyne123@gmail.com')
    })
  });
});

describe('logIn', () => {
  it('debería poder iniciar sesion con email: jackelyne123@gmail.com y password: 123456', () => {
    return logIn('jackelyne123@gmail.com', '123456')
    .then((user)=>{
      expect(user.email).toBe('jackelyne123@gmail.com')
    })
  });
});

describe('logInFb', () => {
  it('debería poder iniciar sesion a facebook con email: jackelyne123@gmail.com y password: 123456', () => {
    return logInFb()
    .then(()=>{
      expect(user.displayName).toBe('jackelyne')
    })
  });
});
