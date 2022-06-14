import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env."jerico-17860",
    storageBucket: process.env."jerico-17860.appspot.com",
    messagingSenderId: process.env."803251744467",
    appId: process.env."1:803251744467:web:106615c19f35d961342e26",
    measurementId: process.env."G-HC61M6046H"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
