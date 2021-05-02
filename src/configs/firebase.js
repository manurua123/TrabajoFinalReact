import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCfI5J3afu_nX9o_u400f3vJh_Ujhc5WD4",
  authDomain: "rua-manuel.firebaseapp.com",
  projectId: "rua-manuel",
  storageBucket: "rua-manuel.appspot.com",
  messagingSenderId: "1032294359219",
  appId: "1:1032294359219:web:66fc0c2a2554fe4b96d0c6"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
