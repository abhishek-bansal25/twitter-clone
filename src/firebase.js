import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBrLvoN1sSUZ9YIA8Icjr99oWNjkYdLmU",
    authDomain: "twitter-clone-dd13f.firebaseapp.com",
    projectId: "twitter-clone-dd13f",
    storageBucket: "twitter-clone-dd13f.appspot.com",
    messagingSenderId: "921069788104",
    appId: "1:921069788104:web:190a21b0bd0fc10f263efd",
    measurementId: "G-L75X5BW0G9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;