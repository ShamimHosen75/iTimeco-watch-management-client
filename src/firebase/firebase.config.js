// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzg2xE-rqqJEss2kr9TNB1fO4FV3pjzWU",
    authDomain: "happy-travelss.firebaseapp.com",
    projectId: "happy-travelss",
    storageBucket: "happy-travelss.appspot.com",
    messagingSenderId: "592722400688",
    appId: "1:592722400688:web:1fa2dbb25125010e417275",
    measurementId: "G-7KL36R39T9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

export default analytics;