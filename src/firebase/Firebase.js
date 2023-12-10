import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmAu4pAjoNkX22wZRMSzxGaZT55YOnV9w",
  authDomain: "poellcandiar.firebaseapp.com",
  projectId: "poellcandiar",
  storageBucket: "poellcandiar.appspot.com",
  messagingSenderId: "821236843804",
  appId: "1:821236843804:web:0d73574a4085db7c1a66d9",
  measurementId: "G-3RMGTVC8PT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
