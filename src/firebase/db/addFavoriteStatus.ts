// import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
// import { db } from "../config";
// import { User } from "firebase/auth";
// import { Therapist } from "@/Types/Therapist";

// export const addFavoriteStatus = async (user: User, isFavorite: boolean, item: Therapist) => {
//     try {
//         if (!isFavorite) {
//             const userInfo = doc(db, "users", user.uid);
//             await updateDoc(userInfo, {
//                 favorites: arrayUnion(item)
//             });
//         }
//         if (isFavorite) {
//             const userInfo = doc(db, "users", user.uid);
//             await updateDoc(userInfo, {
//                 favorites: arrayRemove(item),
//             });
//         }
//     } catch (error) {
//         console.error(error);

//     }
// }

