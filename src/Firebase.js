import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDinDe3VQxdWLh6LC8KgMosmvBybmve7Yc",
    authDomain: "clone-42746.firebaseapp.com",
    projectId: "clone-42746",
    storageBucket: "clone-42746.appspot.com",
    messagingSenderId: "119119919477",
    appId: "1:119119919477:web:c515aff0850ba525613b3c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };