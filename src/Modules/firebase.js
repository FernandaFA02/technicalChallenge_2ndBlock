// ------------------------ Se agrega el SDK del proyecto en firebase ----------------------------------------------//
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore, collection, onSnapshot, deleteDoc, doc} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtDQ3_boIltWqKVUrVi7CHZffVPpyTWhI",
  authDomain: "notes-app-396ac.firebaseapp.com",
  projectId: "notes-app-396ac",
  storageBucket: "notes-app-396ac.appspot.com",
  messagingSenderId: "10216027877",
  appId: "1:10216027877:web:199590094dd254ca28860c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);

// Collection Reference
const colRef = collection(db, 'Notas')

// Real Time collection Data
  onSnapshot(colRef, (snapshot) => {
    let notes = []
    snapshot.docs.forEach((doc) => {
    notes.push({ ...doc.data(), id: doc.id}) //we used three dots to spread that into the new object  
  })
    console.log(notes);

    for (const nota of notes) {
      console.log(nota);
      table.innerHTML += `
      <tbody>
      <tr class="table-light">
          <th scope="row">${nota.titulo}</th>
          <td>${nota.tema}</td>
          <td>${nota.mes}</td>
          <td>${nota.nota}</td>
          <td>${nota.id}</td>
        </tr>
  </tbody>`
    }
  })

  // Deleting documents
  const borrarNota = document.querySelector('.delete')
  borrarNota.addEventListener('submit', (e) => {
    e.preventDefault();
    const docRef = doc(db, 'Notas', borrarNota.id.value)

    deleteDoc(docRef)
    .then(() => {
      borrarNota.reset(); 
    })
  })


