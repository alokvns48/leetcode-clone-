import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCemKnT_CvwA3u0Ird_7UM_uX3CuukPDfk",
  authDomain: "leetcode-clone-77538.firebaseapp.com",
  projectId: "leetcode-clone-77538",
  storageBucket: "leetcode-clone-77538.firebasestorage.app",
  messagingSenderId: "736818129328",
  appId: "1:736818129328:web:76166afa8df729b1784e75",
};

// Corrected: Added parentheses after `getApps`
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
