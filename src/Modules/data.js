import * as module from "./firebase.js"
import { db } from "./firebase.js"
import {  collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Comprobando coneccion para crear colecciones
console.log(db);

const guardarNota = async (titulo, nota, tema) => {
    try {
        const docRef = await addDoc(collection(db, "Notas"),{
            titulo, nota,tema, fecha: new Date (),
        });
        console.log("Document written with ID: ", docRef.id);
    }catch (e) {
        console.error("Error adding document: ", e);
    }
    }


//  ----------------------- Se activa el btn de agregar notas para que envie los datos a firebase ------------------//

const agregarNotas = document.getElementById('btn-agregar');

agregarNotas.addEventListener('click', async (e) => {
    e.preventDefault();
        const titulo = document.getElementById('titulo').value;
        const nota = document.getElementById('descripcion').value;
        const tema = document.getElementById('temas').value;
        console.log(titulo,nota,tema);
        await guardarNota(titulo, nota, tema);
});


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


