import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD3gez2tEYoJU0YQyJffNNsBSmQO8A3gH8",
    authDomain: "reduxfirebase-37c98.firebaseapp.com",
    databaseURL: "https://reduxfirebase-37c98.firebaseio.com",
    projectId: "reduxfirebase-37c98",
    storageBucket: "reduxfirebase-37c98.appspot.com",
    messagingSenderId: "906272062338",
    appId: "1:906272062338:web:ad680cc554af9d3ad56d9b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics(); // dont need this right now 

  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;