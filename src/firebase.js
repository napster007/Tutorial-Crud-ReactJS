// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
    apiKey: "AIzaSyAniZKUV7VTnD7hJaLM9nEk7aGdrSU2UzM",
    authDomain: "employee-mngmt-8a027.firebaseapp.com",
    databaseURL: "https://employee-mngmt-8a027-default-rtdb.firebaseio.com",
    projectId: "employee-mngmt-8a027",
    storageBucket: "employee-mngmt-8a027.appspot.com",
    messagingSenderId: "814717174776",
    appId: "1:814717174776:web:f978c97d41bc71a7670c0d",
    measurementId: "G-9W6GJNJFVK"
  }; */





import firebase from "firebase";
import "firebase/database";

let config = {
    apiKey: "AIzaSyAniZKUV7VTnD7hJaLM9nEk7aGdrSU2UzM",
    authDomain: "employee-mngmt-8a027.firebaseapp.com",
    databaseURL: "https://employee-mngmt-8a027-default-rtdb.firebaseio.com",
    projectId: "employee-mngmt-8a027",
    storageBucket: "employee-mngmt-8a027.appspot.com",
    messagingSenderId: "814717174776",
    appId: "1:814717174776:web:f978c97d41bc71a7670c0d",
    measurementId: "G-9W6GJNJFVK"
};

firebase.initializeApp(config);

export default firebase.database();
