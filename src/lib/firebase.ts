import { initializeApp } from "firebase/app";
import { GithubAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, type User, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { readable } from "svelte/store";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRyK7YmGZv9JUhE6q9J8keg5NfxM50l0A",
  authDomain: "svelte-password-manager.firebaseapp.com",
  projectId: "svelte-password-manager",
  storageBucket: "svelte-password-manager.appspot.com",
  messagingSenderId: "685225126500",
  appId: "1:685225126500:web:afb02b9b1cddcba86f8d71",
  measurementId: "G-W25Z3TNQE0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(firebaseAuth, googleProvider);
}

export const signInWithGithub = async () => {
  return await signInWithPopup(firebaseAuth, githubProvider);
}

export const user = readable<User | null | undefined>(undefined, set => onAuthStateChanged(firebaseAuth, set))

export const signOut = async () => {
  return await firebaseAuth.signOut();
}

export const createNewUser =  (email: string, password: string) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
}


export const sendVerification = async () => {
  if (!user || !firebaseAuth.currentUser) {
    throw error("No user found");
    return;
  } 

  return await sendEmailVerification(firebaseAuth.currentUser);
}