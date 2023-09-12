const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyBziWCL03S7ef2QITxoqQVF8Q7i7BWm3e4",
  authDomain: "node-firebase-63324.firebaseapp.com",
  projectId: "node-firebase-63324",
  storageBucket: "node-firebase-63324.appspot.com",
  messagingSenderId: "46376865623",
  appId: "1:46376865623:web:6bffffd9c6c9bb66a0f812",
  measurementId: "G-04MDTZTK2S"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const product = db.collection("product")
module.exports = product;
