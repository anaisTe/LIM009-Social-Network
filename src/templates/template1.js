import{userLogin, authFacebook, authGoogle} from '../view_controller.js'

export default () =>{
  const div = document.createElement('div');
 const page1 =`<section class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
<img class="col-xs-12 zen" src="image/img-zen.jpeg" alt="google.img">
</section>
<section class="col-xs-12  col-sm-6 col-md-6 col-lg-6">
<div class="col-xs-12  col-sm-12 col-lg-12 icon-brain">
  <img class="col-xs-12 col-sm-12 col-lg-12 icon0" src="image/brain.png"/>
</div>
<span><p>¡Bienvenida!</p></span>
  <div class="col-xs-12 col-lg-12 log">
    <input id="email2" class="col-xs-12 col-lg-12 login_area measure fontsize" type="email"
      placeholder="    Email                                                                              📧">
  </div>
  <div class="col-xs-12 col-lg-12 log">
    <input id="contraseña2" class="col-xs-12 col-lg-12 login_area measure fontsize" type="password"
      placeholder="   Password                                                                          &#128274 ">
  </div> 
  <div class="button">
    <button class="col-xs-12 col-lg-12 btn fontsize" id="ingreso" type="button">Log in</button>
  </div>

<h4 class="col-xs-12 col-sm-12 col-lg-12">O bien ingresa con...</h4>
<div class="col-xs-12 col-sm-12 col-lg-12 icon-fg">
    <a id="btn_google"><img src="image/google.png" alt="google.icon"></a>
    <a id="btn_face"><img src="image/facebook.png" alt="google.icon"></a>
  </div>
</div>
<div class="col-xs-12 col-sm-12 col-lg-12 register">
  <h5>¿No tienes una cuenta?</h5> <a href="#/Registrate" id="registrate">Regístrate</a>
</div>
</section>`;
div.innerHTML=page1;

const btn_login = div.querySelector('#ingreso');
 btn_login.addEventListener('click', userLogin);

const btnFace = div.querySelector('#btn_face');
 btnFace.addEventListener('click', authFacebook);

const btn_google = div.querySelector('#btn_google');
  btn_google.addEventListener('click',  authGoogle)

 return div
}
