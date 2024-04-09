"use client";

import { useUserAuth } from "@/app/context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";
import { Therapist } from "@/Types/Therapist";
import { useEffect, useState } from "react";

export const GetFavoritePsychologists = () => {
    const [data, setData] = useState<Therapist[]>([])
    const [loader, setLoader] = useState(false)
    const { user } = useUserAuth();

    useEffect(() => {
        (async () => {
            try {
                setLoader(true)
                if (!user) return
                const docRef = doc(db, "users", user.uid);
                const { favorites } = (await getDoc(docRef)).data() as {
                    favorites: Therapist[];
                };
                favorites.forEach((el) => {
                    setData(prevS => [...prevS, el])
                });
                setLoader(false)

            } catch (error: any | null) {
                console.error("Error getting favorite psychologists: ", error);
                setLoader(false)
            }
        })()

    }, [user])

    return { data, loader }
};






