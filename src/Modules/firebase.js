// ------------------------ Se agrega el SDK del proyecto en firebase ----------------------------------------------//
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

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
