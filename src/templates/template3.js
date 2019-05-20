import { close_init, getNotes } from "../view_controller.js";
import { observer_user, setPublication } from "../controller/controller-firebase.js";

export default () =>{ 
const div_3 = document.createElement('div');

const publication = `
<div class="col-xs-12 col-lg-12 box-post-total">
<div class="col-xs-12 col-lg-12 box-post">
    <div class="col-xs-12 col-lg-12 box-remove">
        <h5 id="publishBy" class="col-xs-9 col-lg-9 h5">Publicado por</h5>
        <div id="deleteNote" class="col-xs-3 col-lg-3 img-remove">
            <img src="image/delete.svg" alt="eliminar">
        </div>
    </div>
    <div class="col-xs-12 col-lg-12 h5 post">
        <h5 id="note">Aquí va mi nota!</h5>    
    </div>
    <div class="col-xs-12 col-lg-12 h5 edit">
        <img alt="like"> <img alt="editar">
    </div>
</div>
</div>`

getNotes();

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

<section class="col-xs-12 col-lg-12 box-section">
<div class="col-lg-2">
</div>
<div class="col-xs-12 col-lg-3 log2 card">
    <img id="avatar" class="profile_img col-xs-3 col-lg-3" alt="Avatar">
    <div class= "container col-xs-9 col-lg-9">
        <h3 id="username"></h3> 
    </div>
</div>
<div class="col-lg-5">
    <div class="col-xs-12 col-lg-12 box-text">
        <input id="post" type="text" class="col-xs-12 col-lg-12 text" placeholder="¿Que quieres compartir?">
        <div class="col-xs-12 col-lg-12 box-btn-img">
            <!--img class="col-xs-6 col-lg-6" alt="img"-->
            <button id="btn_note" class="col-xs-6 col-lg-6 btn fontsize" type="summit">publicar</button>
        </div> 
    </div>
    ${publication}
</div>

<div class="col-lg-2">
</div>
</section>
`
div_3.innerHTML = homePage;

const btn_logOut = div_3.querySelector('#logOut');
btn_logOut.addEventListener('click',close_init);

observer_user();

const btn_note=div_3.querySelector('#btn_note');
btn_note.addEventListener("click", setPublication)

return div_3
}