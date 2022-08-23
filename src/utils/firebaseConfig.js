import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmGFzrOm6I31y8Qrh8-TPE6VdCZhSgz3o",
  authDomain: "the-vintage-collection.firebaseapp.com",
  projectId: "the-vintage-collection",
  storageBucket: "the-vintage-collection.appspot.com",
  messagingSenderId: "787252761459",
  appId: "1:787252761459:web:75ea548458e1d01846ab06",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
