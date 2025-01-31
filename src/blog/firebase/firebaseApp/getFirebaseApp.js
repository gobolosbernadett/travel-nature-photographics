import { initializeApp } from "firebase/app";

import firebaseConfig from '../config/firebaseConfig.json';

let firebaseApp = null;

export default function getFirebaseApp () {
    if (!firebaseApp) {
        firebaseApp = initializeApp(firebaseConfig);
    }

    return firebaseApp;
}