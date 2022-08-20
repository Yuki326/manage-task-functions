const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
// const { getStorage } = require("firebase-admin/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBT9R_f3mVuns4bci5qqTM4TSnz3_9GKOA",
  authDomain: "managetaskapp.firebaseapp.com",
  projectId: "managetaskapp",
  storageBucket: "managetaskapp.appspot.com",
  messagingSenderId: "879621917968",
  appId: "1:879621917968:web:99bba23c2001bb0f0fe995",
  measurementId: "G-ECDY2XBHTN",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
// const storage = getStorage();

module.exports = { app, db };
// const db = "test";
// module.exports = { db };
