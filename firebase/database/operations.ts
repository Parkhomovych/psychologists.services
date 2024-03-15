import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config";

export const addUser = async () => {
    try {
        const users = collection(db, 'users')
        const docRef = await addDoc(users, {
            name: "Vlad",
            email: "123123@123",
            password: "123123"
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export const allPsychologists = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "psychologists"));
        const data = querySnapshot.forEach((doc) => {
            console.log(doc.id);
        });
    } catch (error) {
        console.log(error);

    }
}

export const FavitePsychologists = async () => {
    try {
        const psychologysts = collection(db, 'psychologists')
        const q = query(psychologysts, where('rating', '>', 4.7))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.id);
            console.log(doc.data());
        })
    } catch (error) {
        console.log(error);

    }
}