import { close_init } from "../view_controller.js";

export default () =>{

const div_3 = document.createElement('div');
const homePage = `
<header>
    <input type="checkbox" id="btn-menu" />
    <label for="btn-menu"><img src="image/menu-three.png" /></label>
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

<div class="col-xs-6 col-lg-6 log card">
<img class="profile_img" src="image/photo.png" alt="Avatar">
  <div class= "container">
    <h3>Usuario</h3> 
    <h3>Edad</h3> 
  </div>
</div>

<div class="col-xs-6 col-lg-6 log">
    <textarea>Escribe aqui tu nota</textarea>
    <button id="btn_note" class="col-xs-4 col-lg-12 btn fontsize" type="summit">publicar</button>
</div> 
`
div_3.innerHTML = homePage;

const btn_logOut = div_3.querySelector('#logOut');
btn_logOut.addEventListener('click',close_init);

return div_3
}