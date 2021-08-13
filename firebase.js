import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCdlx4jXqIC4xdDXS0YpTuI-_bQKOFEpJc",
  authDomain: "docs-598d9.firebaseapp.com",
  databaseURL: "https://docs-598d9-default-rtdb.firebaseio.com",
  projectId: "docs-598d9",
  storageBucket: "docs-598d9.appspot.com",
  messagingSenderId: "588052613168",
  appId: "1:588052613168:web:c9dc8b76e5ef3492fdc5f5",
  measurementId: "G-Z54JXSSLRF",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
