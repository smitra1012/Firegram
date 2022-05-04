import * as firebase from 'firebase/compat/app';
import 'firebase/storage';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB4VlfvtEM-htrOd90Q7ij-OrYaCwFP7fM",
    authDomain: "smitra-firegram.firebaseapp.com",
    projectId: "smitra-firegram",
    storageBucket: "smitra-firegram.appspot.com",
    messagingSenderId: "666260140596",
    appId: "1:666260140596:web:a2bb91ba407c8d73b2d061"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };