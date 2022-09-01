// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDt4VcfxqAP6OO1FEgN5NhPuBl5zl9MeHI",
    authDomain: "genius-car-sevices-65ced.firebaseapp.com",
    projectId: "genius-car-sevices-65ced",
    storageBucket: "genius-car-sevices-65ced.appspot.com",
    messagingSenderId: "843418658247",
    appId: "1:843418658247:web:58495371700a3f9b1fe5e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;