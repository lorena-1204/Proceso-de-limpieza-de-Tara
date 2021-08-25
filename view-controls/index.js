import { components } from "../view/components.js";

const changeView = (route) =>{
    const container = document.getElementById('root');
    container.innerHTML = '';
    switch(route){
        case '':
            container.appendChild(components.insumos());
            break;
           
        case '#/ProductoFinal':
            container.appendChild(components.productoFinal());
            break;
            
        default:
    }
}

export { changeView };
