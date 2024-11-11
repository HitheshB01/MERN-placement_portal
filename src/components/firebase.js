// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAr9Qx5Q_AOgSK1_lxt1PlkyDv7hJzRw-g",
//   authDomain: "placement-portal-7943a.firebaseapp.com",
//   projectId: "placement-portal-7943a",
//   storageBucket: "placement-portal-7943a.appspot.com",
//   messagingSenderId: "931233419355",
//   appId: "1:931233419355:web:3ad62222313cb238dd2f7e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app);
// export default app;


// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr9Qx5Q_AOgSK1_lxt1PlkyDv7hJzRw-g",
  authDomain: "placement-portal-7943a.firebaseapp.com",
  projectId: "placement-portal-7943a",
  storageBucket: "placement-portal-7943a.appspot.com",
  messagingSenderId: "931233419355",
  appId: "1:931233419355:web:3ad62222313cb238dd2f7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize Firestore and export it
export default app;
