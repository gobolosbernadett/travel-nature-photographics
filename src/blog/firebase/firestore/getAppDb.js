import { getFirestore } from "firebase/firestore";
import getFirebaseApp from "../firebaseApp/getFireBaseApp";

let appDb = null;

export default function getAppDb() {
    if(!appDb) {
        appDb = getFirestore( getFirebaseApp() );
    }

    return appDb;
}