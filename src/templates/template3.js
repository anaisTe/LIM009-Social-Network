import { close_init } from "../view_controller.js";

export default () =>{

const div_3 = document.createElement('div');
const homePage = `
<div id="page_3">
    <h1>hola</h1>
</div>
<div>
    <button id="logOut">Cerrar Sesion</button>
</div>
`
div_3.innerHTML = homePage;

const btn_logOut = div_3.querySelector('#logOut');
btn_logOut.addEventListener('click',close_init);

return div_3
}