import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCSN2eziunMAGqsnI6HW0JJveaxzQxzUig",
  authDomain: "vuetify-todo-sandee-007.firebaseapp.com",
  databaseURL: "https://vuetify-todo-sandee-007.firebaseio.com",
  projectId: "vuetify-todo-sandee-007",
  storageBucket: "vuetify-todo-sandee-007.appspot.com",
  messagingSenderId: "190378122579",
  appId: "1:190378122579:web:28ca1419074e603d7215a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;