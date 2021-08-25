// Este es el punto de entrada de tu aplicacion
import { initFirebase } from './firebase-config.js';

import { changeView } from "./view-controls/index.js";

const init = () => {
    initFirebase();
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init); // Cada vez que hay una recarga de página valida esa función
