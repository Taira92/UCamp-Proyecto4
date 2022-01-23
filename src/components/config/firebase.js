import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyCT9ofClbrMFLfKaOEhD7_CYD3lwB6dt-8",
    authDomain: "crud-d9ace.firebaseapp.com",
    projectId: "crud-d9ace",
    storageBucket: "crud-d9ace.appspot.com",
    messagingSenderId: "305241359049",
    appId: "1:305241359049:web:acb01c21c9e20af35d4318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbConfig = getFirestore(app);





