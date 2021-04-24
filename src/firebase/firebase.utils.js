import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDKP0x5GbjSgZDgj7xakoTPuXtzolwu0vQ",
    authDomain: "marumai-1f57c.firebaseapp.com",
    projectId: "marumai-1f57c",
    storageBucket: "marumai-1f57c.appspot.com",
    messagingSenderId: "604508114121",
    appId: "1:604508114121:web:dca356fb27b3636bbb1118",
    measurementId: "G-VD8B22TLCF"
};

firebase.initializeApp(config);

export const createuserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;