import { useEffect, useLayoutEffect, useState } from 'react';
import { useUserAuth } from '@/app/context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { addFavoriteStatus } from '@/firebase/db/addFavoriteStatus';
import { Therapist } from '@/Types/Therapist';

const useFavoriteStatus = (item: Therapist): [boolean, () => void] => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { user } = useUserAuth();

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

    const handleFavorite = async () => {
        setIsFavorite((prevState) => !prevState);
        if (user) {
            try {
                await addFavoriteStatus(user, isFavorite, item);
            } catch (error) {
                console.error(error);

            }
        }
    };

    return [isFavorite, handleFavorite];
};

export default useFavoriteStatus;
