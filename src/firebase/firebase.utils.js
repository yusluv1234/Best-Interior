import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyCB6tC6S_FA3bZS4VRyzVhog-kllkNnQMc",
    authDomain: "crwn-db-bb81f.firebaseapp.com",
    databaseURL: "https://crwn-db-bb81f.firebaseio.com",
    projectId: "crwn-db-bb81f",
    storageBucket: "crwn-db-bb81f.appspot.com",
    messagingSenderId: "962329911669",
    appId: "1:962329911669:web:ee87a162e76a9e507d333c",
    measurementId: "G-6BE289GY4V"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(Config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;