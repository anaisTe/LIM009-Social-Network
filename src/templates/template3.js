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

`
div_3.innerHTML = homePage;

const btn_logOut = div_3.querySelector('#logOut');
btn_logOut.addEventListener('click',close_init);

return div_3
}