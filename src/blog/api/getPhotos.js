import { collection, getDocs } from "firebase/firestore";
import { getAppDb } from "../firebase";

export default async function getPhotos() {
    // const response = await fetch('/assets/json/photograph.json');
    
    const db = getAppDb();
    const collPhotos = collection(db, 'photograph');

    const photographSnapshot = await getDocs(collPhotos);

    const photograph = photographSnapshot.docs.map(item => item.data());

    return photograph;
}