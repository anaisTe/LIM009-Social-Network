import template1 from "../templates/template1.js"
import template2 from "../templates/template2.js"
import template3 from "../templates/template3.js"

export const changePage = (hash) =>{
    if( hash === "#/" || hash=== "" || hash === "#"){
        return viewTmp("#/signIn");
    } else if (hash === "#/signIn" || hash === "#/init" || hash === "#/register" || hash === "#/perfil" || hash === "#/configuracion" || hash === "#/close"){
        return viewTmp(hash);
    } else {
        return viewTmp();
    }
}
const viewTmp = (routers) =>{
    const divMain = document.getElementById("main");
    divMain.innerHTML=" ";
    switch (routers) {
        case "#/signIn" :
        divMain.appendChild(template1());
        break;

        case "#/init" :
        divMain.appendChild(template3());
        break;

        case "#/register" :
        divMain.appendChild(template2());
        break;

        case "#/perfil" :
        divMain.appendChild(template3());
        break;

        case "#/configuracion" :
        divMain.appendChild(template3());
        break;

        case "#/close" :
        divMain.appendChild(template1());
        break;
        
       default:
       divMain.appendChild(template2());
       break;

    }
}