 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
 import { getStorage } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";
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
 const auth = getAuth(app);
 const storage = getStorage();


var btns=document.getElementById("btn")
btns.addEventListener("click",()=>{

 let email=document.getElementById("input").value    
 let password=document.getElementById("password").value    
 let firstname=document.getElementById("fname").value    
 let lastname=document.getElementById("lname").value    
 let repeatp=document.getElementById("rpassword").value    
let file=document.getElementById('file').files







 if(password==repeatp ){

alert('Wrong Password')
}





else{
    createUserWithEmailAndPassword(auth, email, password ,firstname ,lastname ,repeatp)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("loggin")
 
        window.location.href='login.html'
 
 
 
        // ...
    })
 
 
 
    
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
 
        console.log('errorCode',errorCode);
        console.log(' errorMessage', errorMessage);
        // ..
    });
}



})

