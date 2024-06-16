// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUzOTG5bF5DDdWasxs2DUNTWf0QGMTCxc",
    authDomain: "essance-ai-college.firebaseapp.com",
    projectId: "essance-ai-college",
    storageBucket: "essance-ai-college.appspot.com",
    messagingSenderId: "80728603254",
    appId: "1:80728603254:web:a2589f3dc138a944c5fd57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}
