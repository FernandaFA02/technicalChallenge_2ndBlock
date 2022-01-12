//----------------- Se comprueba la coneccion al html -------------------------//
console.log("Main module conected!");

import { fetchData } from "./Modules/data.js"


fetchData();

// ------------------ Se activa el btn para regresar a la pantalla principal ----------------------------------//
const regresar = document.getElementById('regresar')
regresar.addEventListener('click', () => {
    console.log('pusheaste btn regresar');
    window.location.href = "../src/index.html"
})
