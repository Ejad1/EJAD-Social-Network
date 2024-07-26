import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBRUliMjauc9a4iZF9Sy5uOcKXcXNjmK1I",
  authDomain: "esn-authentification.firebaseapp.com",
  projectId: "esn-authentification",
  storageBucket: "esn-authentification.appspot.com",
  messagingSenderId: "164841028071",
  appId: "1:164841028071:web:30dba0e2f49e00b607e542",
  measurementId: "G-60GVWYWRDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
