import { components } from "./components.js";

export const changePage = (hash)=>{
    // const id = hash.split('/')[1];
    const divMain = document.getElementById('main');
    divMain.innerHTML='';

    switch (hash) {
        case '':
        case '#':
        case '#/resgister':
            {return divMain.appendChild(components.test()); 
            }  

        default:
            return divMain.appendChild(components.different())
    }
}