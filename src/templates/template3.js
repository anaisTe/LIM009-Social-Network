import { close_init } from "../view_controller.js";

export default () =>{

const div_3 = document.createElement('div');
const homePage = `
<header>
    <input type="checkbox" id="btn-menu" />
    <label for="btn-menu"><div class="img-menu"><img src="image/menu-three.png" /></div></label>
    <nav  class="menu">
        <ul>
            <li>
                <a href="#/perfil">Perfil 
                    <img src="image/arrow-wh.png" />
                </a>
                <div class="subMenu">
                    <ul>
                        <li>
                            <a href="#/configuracion">Configuración</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <img src="image/brain.png" class="logo" />
            </li>
            <li>
                <a href="#/close" id="logOut">
                    <img src="image/logout-wht.png" />Cerrar Sesión
                </a>
            </li>
        </ul>
    </nav>
</header>

<section class="col-xs-12 box-section">
<div class="col-xs-12 col-lg-6 log2 card">
<img class="profile_img col-xs-3" src="image/photo.png" alt="Avatar">
  <div class= "container col-xs-9">
    <h3>Usuario</h3> 
    <h3>Edad</h3> 
  </div>
</div>

<div class="col-xs-12 col-lg-6 box-text">
    <textarea class="col-xs-12 text"> ¿Que quieres compartir?</textarea>
    <div class="col-xs-12 box-btn-img">
    <img class="col-xs-6" alt="img">
    <button id="btn_note" class="col-xs-6 col-lg-12 btn fontsize" type="summit">publicar</button>
    </div> 
</div>
<div class="col-xs-12 box-post-total">
<div class="col-xs-12 box-post">
    <div class="col-xs-12 box-remove">
      <h5 class="col-xs-9 h5"> Publicado por </h5>
      <div class="col-xs-3 img-remove">
      <img  alt="eliminar">
      </div>
    </div>
    <div class="col-xs-12 h5 post">
      <h5> dsa</h5>    
    </div>
    <div class="col-xs-12 h5 edit">
      <img alt="like"> <img alt="editar">
    </div>
</div>
</div>
</section>
`
div_3.innerHTML = homePage;

const btn_logOut = div_3.querySelector('#logOut');
btn_logOut.addEventListener('click',close_init);

return div_3
}