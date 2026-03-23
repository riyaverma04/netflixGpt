// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl3QJ4LVfQIF_w_HE7f2kZe6OOaljEHzk",
  authDomain: "netflixgpt-88e99.firebaseapp.com",
  projectId: "netflixgpt-88e99",
  storageBucket: "netflixgpt-88e99.firebasestorage.app",
  messagingSenderId: "826006682341",
  appId: "1:826006682341:web:a02dd4ebf98eb251e5720c",
  measurementId: "G-WCFGPDKRDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);