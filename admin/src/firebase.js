// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfMDjUpY2ofkjnIvB3rM9tiIWC2K0jYsc",
  authDomain: "netflixclone-f3c22.firebaseapp.com",
  projectId: "netflixclone-f3c22",
  storageBucket: "netflixclone-f3c22.appspot.com",
  messagingSenderId: "433598776969",
  appId: "1:433598776969:web:22e0d8f6010e2242ea2858",
  measurementId: "G-PR7XQR0WWS",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage().ref();

export default storage;
