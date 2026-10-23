import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9RiNAe-WTtlH650DKWUJ-KLcIqaq0sgA",
  authDomain: "beros-base-server.firebaseapp.com",
  projectId: "beros-base-server",
  storageBucket: "beros-base-server.firebasestorage.app",
  messagingSenderId: "940726741661",
  appId: "1:940726741661:web:aa907ba675b81a500e8274",
  measurementId: "G-4RXQ2NTFBN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
