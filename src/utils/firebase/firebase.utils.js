import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, ProviderId } from 'firebase/auth';
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

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);  
