// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDce8_o0cVxBb8BbWkCtADiSQDI9lxhCxw",
    authDomain: "memoriasqr-7c61f.firebaseapp.com",
    databaseURL: "https://memoriasqr-7c61f-default-rtdb.firebaseio.com",
    projectId: "memoriasqr-7c61f",
    storageBucket: "memoriasqr-7c61f.appspot.com",
    messagingSenderId: "775345828373",
    appId: "1:775345828373:web:0e379d4207647f5b59141c",
    measurementId: "G-K9SBJQ9XNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
