import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "../config";

export async function getPshichologists() {
    "use server";
    let docId: string[] = [];
    let docInfo: DocumentData = [];
    const querySnapshot = await getDocs(collection(db, "psychologists"));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        docInfo.push(data);
        docId.push(doc.id);
    });
    return docInfo;
}
