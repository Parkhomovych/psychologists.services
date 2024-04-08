"use client";
import { useUserAuth } from "@/app/context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config";
import { Therapist } from "@/Types/Therapist";
import { useEffect, useState } from "react";

export const GetFavoritePsychologists = () => {
    const [data, setData] = useState<Therapist[]>([])
    const { user } = useUserAuth();

    useEffect(() => {
        if (!user) return
        (async () => {
            try {
                const docRef = doc(db, "users", user.uid);
                const { favorites } = (await getDoc(docRef)).data() as {
                    favorites: Therapist[];
                };
                favorites.forEach((el) => {
                    setData(prevS => [...prevS, el])
                });
            } catch (error: any | null) {
                console.error("Error getting favorite psychologists: ", error);
            }

        })()
    }, [user])

    return data
};






