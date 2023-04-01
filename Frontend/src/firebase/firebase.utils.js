import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";
const config = {
  apiKey: "AIzaSyA40JkabC2BXpeIxkBT6HLFWDHJErNMpDM",

  authDomain: "artscape-d96db.firebaseapp.com",

  projectId: "artscape-d96db",

  storageBucket: "artscape-d96db.appspot.com",

  messagingSenderId: "734673432361",

  appId: "1:734673432361:web:35eba1f81936f6bb825138",

  measurementId: "G-XT8ZZD08MW",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`Users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
