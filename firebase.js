// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: "AIzaSyBfaEbVewHBNCbyFdeQYl2lf1h0QkWyzC8",

	authDomain: "facebook-clone-ece8a.firebaseapp.com",

	projectId: "facebook-clone-ece8a",

	storageBucket: "facebook-clone-ece8a.appspot.com",

	messagingSenderId: "75066237769",

	appId: "1:75066237769:web:722bbb708d616cb324f098",
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage();

export { db, storage };
