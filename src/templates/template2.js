import { registry } from '../view_controller.js';
import { setUser } from '../controller/controller-firebase.js'

const div2 = document.createElement('div');

export default () => {
  const regis=`
  <section class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
  <img class="col-xs-12 zen" src="image/img-zen.jpeg" alt="google.img">
  </section>
  <section class="col-xs-12  col-sm-6 col-md-6 col-lg-6">
  <div class="col-xs-12  col-sm-12 col-lg-12 icon-brain">
    <img class="col-xs-12 col-sm-12 col-lg-12 icon0" src="image/brain.png"/>
  </div>
  <span><p>Regístrate</p></span>
    <div class="col-xs-12 col-sm-12 col-lg-12 log">
    <input id="user_name" class="col-xs-12 col-lg-12 login_area measure fontsize" type="text"
      placeholder="   &#128100    Nombre y Apellido">
    </div>
    <div class="col-xs-12 col-lg-12 log">
      <input id="email" class="col-xs-12 col-lg-12 login_area measure fontsize" type="email"
        placeholder="   &#9993    Email ">
    </div>
    <div class="col-xs-12 col-lg-12 log">
      <input id="contraseña" class="col-xs-12 col-lg-12 login_area measure fontsize" type="password"
        placeholder="   &#128274    Password  ">
    </div> 
    <div class="button">
      <button class="col-xs-12 col-lg-12 btn fontsize" id="register" type="button">Summit</button>
    </div>
  </section>`
   
  div2.innerHTML = regis;

  const new_user = div2.querySelector('#register');
  new_user.addEventListener('click',registry);
  return div2
}

export const regCloudFirebase = (uid) => {
  var name = div2.querySelector("#user_name").value;
  var email = div2.querySelector("#email").value;
  //SET USER TO FIRESTORE
  setUser(uid, name, email)
  .then(()=> {
    console.log("Logueo exitoso");
  })
  .catch((error) => {
      console.error("Error: ", error);
  });
}