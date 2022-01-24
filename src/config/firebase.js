import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyBkRs4iR-bh1AIC0xU2DvzlKZl4i33vCi4",
    authDomain: "restaurant-criollon.firebaseapp.com",
    projectId: "restaurant-criollon",
    storageBucket: "restaurant-criollon.appspot.com",
    messagingSenderId: "160206987347",
    appId: "1:160206987347:web:644b6d948dbac5b03a66a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbConfig = getFirestore(app);





