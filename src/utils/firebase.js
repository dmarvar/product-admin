import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxAuFYZeWFVPxu2oTI6qoMFvt0_N5wIqI",
  authDomain: "merkar-5e730.firebaseapp.com",
  databaseURL: "https://merkar-5e730.firebaseio.com",
  projectId: "merkar-5e730",
  storageBucket: "merkar-5e730.appspot.com",
  messagingSenderId: "687568701283",
  appId: "1:687568701283:web:c6dbd0f3bc01d5f410f556",
  measurementId: "G-ZVXSQB8FHK"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
