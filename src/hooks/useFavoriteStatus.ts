import { useEffect, useState } from 'react';
import { useUserAuth } from '@/app/context/AuthContext';
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { Therapist } from '@/Types/Therapist';
import { usePathname } from 'next/navigation';

const useFavoriteStatus = (item: Therapist) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { user } = useUserAuth();
    const pathname = usePathname();

    useEffect(() => {
        if (!user) return
        (async () => {
            try {
                const docUsers = doc(db, 'users', user.uid);
                const { favorites } = (await getDoc(docUsers)).data() as { favorites: Therapist[] }
                favorites.forEach((el) => {
                    if (el.id === item.id) {
                        setIsFavorite(true)
                    }
                })
            } catch (error) {
                console.error(error);
            }
        })()

    }, [item.id, user]);

    const addFavorite = async () => {
        setIsFavorite(true);
        if (!user) return
        try {
            const userInfo = doc(db, "users", user.uid);
            await updateDoc(userInfo, {
                favorites: arrayUnion(item)
            });
        } catch (error) {
            console.error(error);
        }

    };
    const removeFavorite = async () => {
        setIsFavorite(false);
        if (!user) return
        try {
            const userInfo = doc(db, "users", user.uid);
            await updateDoc(userInfo, {
                favorites: arrayRemove(item),
            });

            if (window.location.protocol === 'https:' && pathname === "/favorites") {
                window.location.href = window.location.href;
            } else {
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    };
    return { isFavorite, addFavorite, removeFavorite };
};

export default useFavoriteStatus;
