
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
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