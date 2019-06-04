import { close_init } from "../view_controller.js";
import { observer_user, set_Publication, getUserUid } from "../controller/controller-firebase.js";
import { getNotes } from "../templates/post.js";

export default () =>{ 
    const user = getUserUid()  
 
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
                    <a href=" " id="logOut">
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
        <img id="avatar" class="profile_img col-xs-3 col-lg-3" alt="Avatar" >
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
                <select class="col-xs-3 col-lg-3"  id="select_post">
                    <option value="" disabled selected hidden>Privacidad</option>
                    <option value="private">Privado</option>
                    <option value="public">Público</option>
                </select>
            </div> 
        </div>
        <div id="view_note" class="col-xs-12 col-lg-12 box-post-total">
    </div>
    </div>

    <div class="col-lg-2">
    </div>
    </section>
    `
    div_3.innerHTML = homePage;
        
    const btn_note = div_3.querySelector('#btn_note');
    const post = div_3.querySelector('#post');
    const select = div_3.querySelector('#select_post');

    btn_note.addEventListener("click", ()=> { 
        if(select.value == "private" || select.value == "public"){
            set_Publication(post.value, select.value);
            post.value = "";
        }else {
            alert('Seleccione un tipo de privacidad de nota');
        }
            
    });

    const btn_logOut = div_3.querySelector('#logOut');
    btn_logOut.addEventListener('click',close_init);

    observer_user();

    getNotes(user);
    return div_3
}