import { db } from "./data.js"

db.collection('Notas').onSnapshot((data) => {
    data.forEach( (doc) => {
        console.log(doc.data());
    })
  })

console.log(db);