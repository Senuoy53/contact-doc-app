import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import Firebase storage
import "firebase/storage";
import { firebaseConfig } from "./variables";

let config = {
  ...firebaseConfig,
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const auth = firebase.auth();

// Firebase storage
const storage = firebase.storage();

export { firestore, auth, storage };
