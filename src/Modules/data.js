import * as module from "./firebase.js"
import { db } from "./firebase.js"

//---------------------------- Se atrae la data del JSON -------------------------------//
const traerData = "../data/topics.json";
console.log(traerData); //Se comprueba que funcione

// ---------------------------Se crea un arreglo vacio para vaciar la data -------------//
let arrayTopics = [];

//--------------Se crea el fetch dentro del cual se hará push con la info al array vacio ------------//
export const fetchData = () => {
    fetch(traerData)
    .then((response) => response.json(response))
    .then((data) => {
        arrayTopics.push(data)
        console.log(arrayTopics);
        iterarTopics(arrayTopics[0].ResolutionTopics)
    })
}

// ------------------------- Se hace la iteración de los datos para pintar dinámicamente --------------//
const iterarTopics = (arrayTopics) => {
    for (const [index, tema] of arrayTopics.entries()) {
        console.log(index, tema);

        let temas = document.getElementById('temas')
        temas.innerHTML += `
                        <option>${tema.topic}</option>`
    }
}
// Comprobando coneccion para crear colecciones
console.log(db);

