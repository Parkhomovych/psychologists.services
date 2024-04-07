import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../config";
import { User } from "firebase/auth";

export const addFavoriteStatus = async (user: User, isFavorite: boolean, id: string) => {
    try {
        if (!isFavorite) {
            const userInfo = doc(db, "users", user.uid);
            await updateDoc(userInfo, {
                favorites: arrayUnion(id),
            });
        }
        if (isFavorite) {
            const userInfo = doc(db, "users", user.uid);
            await updateDoc(userInfo, {
                favorites: arrayRemove(id),
            });
        }
    } catch (error) { 
        console.error(error);
        
    }

}

