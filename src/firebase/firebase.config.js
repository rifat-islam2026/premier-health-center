// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsKWzDfosYWkZmZc3D5PT66OIcWaZ1qhM",
  authDomain: "premier-health-center.firebaseapp.com",
  projectId: "premier-health-center",
  storageBucket: "premier-health-center.appspot.com",
  messagingSenderId: "915191531485",
  appId: "1:915191531485:web:9190f563761d46652cd834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;