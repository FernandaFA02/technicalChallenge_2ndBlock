// ------------------------ Se agrega el SDK del proyecto en firebase ----------------------------------------------//
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtDQ3_boIltWqKVUrVi7CHZffVPpyTWhI",
  authDomain: "notes-app-396ac.firebaseapp.com",
  projectId: "notes-app-396ac",
  storageBucket: "notes-app-396ac.appspot.com",
  messagingSenderId: "10216027877",
  appId: "1:10216027877:web:199590094dd254ca28860c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// ------------------------------ Se  crea la colección que enviará las notas ---------------------------------------//
// try {
//   const docRef = await addDoc(collection(db, "Notas"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

//  ----------------------- Se activa el btn de agregar notas para ue envie los datos a firebase ------------------//

const agregarNotas = document.getElementById('btn-agregar');
agregarNotas.addEventListener('click', async (e) => {
    e.preventDefault();

    let notas = {
        titulo: document.getElementById('titulo').value,
        nota: document.getElementById('descripcion').value,
        tema: document.getElementById('temas').value
    };
    console.log(notas);
    await guardarNota(notas);
    setTimeout(() => {
        alert('Tú nota ha sido guardada!')
    }, 1500);
})

const guardarNota = (notas) => {
  console.log(notas);
  db.collection('Notes').doc().set(notas);
}
// try {
//     const guardarNota = await addDoc(collection(db, "Notas").set(notas));
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }