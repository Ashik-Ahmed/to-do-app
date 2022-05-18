import { getAuth } from 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,

    apiKey: "AIzaSyC6Xoa7VNY-42EKI1-Dw60zvfKhfz9A5tI",
    authDomain: "to-do-app-5726a.firebaseapp.com",
    projectId: "to-do-app-5726a",
    storageBucket: "to-do-app-5726a.appspot.com",
    messagingSenderId: "950782118250",
    appId: "1:950782118250:web:7b7118b04a86c087f1bd13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;