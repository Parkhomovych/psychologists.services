import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "../config";

export const getPsychologists = async () => {
    "use server";
    let docInfo: DocumentData = [];
    const querySnapshot = await getDocs(collection(db, "psychologists"));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id

        docInfo.push(data);
    });
    return docInfo;
}
