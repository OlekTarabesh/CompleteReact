import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword
}   from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGjgVRE6xqAsncuDDvjGI9NmfYEg49NnI",
    authDomain: "crwn-clothing-db-94ccd.firebaseapp.com",
    projectId: "crwn-clothing-db-94ccd",
    storageBucket: "crwn-clothing-db-94ccd.appspot.com",
    messagingSenderId: "938524179560",
    appId: "1:938524179560:web:96d825ba298d63fcfa4fdd"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
    
  googleProvider.setCustomParameters({
        prompt: 'select_account'
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => 
    signInWithPopup(auth, googleProvider);  
  export const signInWithGoogleRedirect = () => 
    signInWithRedirect(auth, googleProvider);
  
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
      if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating the user', error.massage);
        }
    }
    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  };