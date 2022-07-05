//CONFIGURATION TO FETCH AND SEND FIREBASE DATA
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMFRlucr7aHygbWO1sQ7wCV4XYFbzJPi4",
  authDomain: "wk-welding-8c475.firebaseapp.com",
  projectId: "wk-welding-8c475",
  storageBucket: "wk-welding-8c475.appspot.com",
  messagingSenderId: "226115173697",
  appId: "1:226115173697:web:6d1c149136633db0d9b5c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firestore initialize
const db = getFirestore(app)

export default db
