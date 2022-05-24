import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBSNSqzMIf8lg56ha9Qg5OSd1WwR4N15ao",
  authDomain: "crud-react-firestore-6f4bd.firebaseapp.com",
  projectId: "crud-react-firestore-6f4bd",
  storageBucket: "crud-react-firestore-6f4bd.appspot.com",
  messagingSenderId: "899861972356",
  appId: "1:899861972356:web:bcb89335663975d9e909d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export {auth, firebase}