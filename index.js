
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getFirestore , collection, addDoc,  getDocs,doc, updateDoc, deleteDoc   } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW93XFyu1agGP08IFaD-XyWsulyDYBbto",
  authDomain: "practice-afa4a.firebaseapp.com",
  projectId: "practice-afa4a",
  storageBucket: "practice-afa4a.appspot.com",
  messagingSenderId: "589081704355",
  appId: "1:589081704355:web:ddc820b029377c0f6a4c16",
  measurementId: "G-68060WNCGN"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  let btn=document.getElementById("btn")
  btn.addEventListener('click',async()=>{
   
var text=document.getElementById('text').value
var descr=document.getElementById('desc').value
    try {
      const docRef = await addDoc(collection(db, "users"), {
       text:text,
       descr:descr
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  })

 var div=document.getElementById('sec')

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} =>`);
  div.innerHTML +=     
 
`     <div style='border:2px solid purple; margin-top:50px; padding:10px; border-radius:10px;'>
   
<h3 style='text-transform: capitalize;' font-family :Georgia, 'Times New Roman;', Times, serif;>${doc.data().text}</h3>
<p  style='font-family :Georgia, 'Times New Roman;', Times, serif;>${doc.data().descr}</p>
<button onclick=edit("${doc.id}") style=' font-size: 20px;
padding: 8px;
margin-top: 10px;
box-shadow: 0px 3px 5px rgb(226, 207, 207);
border-radius: 8px;
border-style: none;
color: aliceblue;
background-color:blueviolet;'  >Edit</button>
<button onclick=deletea("${doc.id}") style='font-size: 20px;
padding: 8px;
margin-top: 10px;
box-shadow: 0px 3px 5px rgb(226, 207, 207);
border-radius: 8px;
border-style: none;
color: aliceblue;
background-color:blueviolet;'>delete</button>
</div> 
`

});

async function edit(id) 
{

    const list = doc(db, "users", id);
    
    let updatetext = prompt('update text')
let updatedesc=prompt('Update')
await updateDoc(list, {
    text:updatetext,
    descr:updatedesc
})
.then(()=>
{

window.location.reload()

})

    
}

let  deletea =  async (id) =>{
  
  
  await deleteDoc(doc(db, "users", id))
  
  .then(()=>{
    window.location.reload();
  });
  
}
window.deletea=deletea
window.edit=edit