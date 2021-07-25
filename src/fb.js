  import firebase from 'firebase/app'
  import 'firebase/firestore'
  
  var firebaseConfig = {
    apiKey: "AIzaSyAUWKYJrg4-J3oAgXEsU_n7jJ-UJutSD3I",
    authDomain: "my-todo-979c0.firebaseapp.com",
    projectId: "my-todo-979c0",
    storageBucket: "my-todo-979c0.appspot.com",
    messagingSenderId: "626211502595",
    appId: "1:626211502595:web:5db7ec42d5c18701a46c36",
    measurementId: "G-S19Z989XKF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  db.settings({ timestampsInSnapshots: true });
  
  export default db;