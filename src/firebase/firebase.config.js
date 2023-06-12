// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCrWgF5g3K3D0hy3aq9d2XBKiaT4gesBis",
//   authDomain: "kitchen-champ.firebaseapp.com",
//   projectId: "kitchen-champ",
//   storageBucket: "kitchen-champ.appspot.com",
//   messagingSenderId: "204821983560",
//   appId: "1:204821983560:web:c2306909d7a0c79fa2437d"
// };

const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;