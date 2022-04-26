import firebase from "firebase/app";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsjnyveE8M55s3KyErC9X1oSZgT1QfWYs",
    authDomain: "verb-list-practice.firebaseapp.com",
    databaseURL: "https://verb-list-practice-default-rtdb.firebaseio.com",
    projectId: "verb-list-practice",
    storageBucket: "verb-list-practice.appspot.com",
    messagingSenderId: "981556900307",
    appId: "1:981556900307:web:f430421bba296880edbf26"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.database().ref();

export { db };