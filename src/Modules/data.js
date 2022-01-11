import * as module from "./firebase.js"
import { db } from "./firebase.js"
import {  collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

//----------------------------------- Comprobando conección para crear colecciones ----------------------------------//
console.log(db);

//-----------------------------Se crea funcion para agregar los datos del objeto dentro de la colección -------------//
const guardarNota = async (titulo, nota, tema, mes) => {
    try {
        const docRef = await addDoc(collection(db, "Notas"),{
            titulo, nota,tema,mes, fecha: new Date (),
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
        const mes = document.getElementById('mes').value;
        console.log(titulo,nota,tema, mes);
        await guardarNota(titulo, nota, tema, mes);
});


//--------------------------------------------------------- Se atrae la data del JSON -------------------------------//
const traerData = "../data/topics.json";
console.log(traerData); //Se comprueba que funcione

// ---------------------------Se crea un arreglo vacio para vaciar la data -------------------------------------------//
let arrayTopics = [];
let arrayBimestre =[];

//----------------Se crea el fetch dentro del cual se hará push con la info al array vacio ---------------------------//
export const fetchData = () => {
    fetch(traerData)
    .then((response) => response.json(response))
    .then((data) => {
        arrayTopics.push(data)
        // console.log(arrayTopics);
        iterarTopics(arrayTopics[0].ResolutionTopics)
        arrayBimestre.push(data)
        // console.log(arrayBimestre);
        iterarBimestre(arrayBimestre[0].ResolutionTopics)
    })
}

// ------------------------- Se hace la iteración de los datos para pintar dinámicamente ------------------------------//
const iterarTopics = (arrayTopics) => {
    for (const [index, tema] of arrayTopics.entries()) {
        console.log(index, tema);
        let temas = document.getElementById('temas')
        temas.innerHTML += `
                        <option>${tema.topic}</option><br>`
    }
}

// ------------------------- Se hace la iteración de los datos del bimestre para pintar dinámicamente ------//
const iterarBimestre = (arrayBimestre) => {
    for (const [index, mes] of arrayBimestre.entries()) {
        console.log(index, mes);
        let bimestre = document.getElementById('mes')
        bimestre.innerHTML += `
                            <br><option>${mes.bimestre}</option>`
    }
}

