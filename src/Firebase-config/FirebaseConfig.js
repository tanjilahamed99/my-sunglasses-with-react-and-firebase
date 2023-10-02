
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQMzO_HR6PgKHo6zI_hvFNc5It5wAVLss",
    authDomain: "my-sunglasses.firebaseapp.com",
    projectId: "my-sunglasses",
    storageBucket: "my-sunglasses.appspot.com",
    messagingSenderId: "73048058275",
    appId: "1:73048058275:web:8f43b2d6a72f3b63b95216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth