import { useEffect, useState } from 'react';
import { useUserAuth } from '@/app/context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { addFavoriteStatus } from '@/firebase/db/addFavoriteStatus';

const useFavoriteStatus = (itemId: string): [boolean, () => void] => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { user } = useUserAuth();

    useEffect(() => {
        (async () => {
            if (user) {
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                const data = docSnap.data() as { favorites: string[] };

                if (Array.isArray(data.favorites) && data.favorites.includes(itemId)) {
                    setIsFavorite(true);
                }
            }
        })()

    }, [user, itemId]);

    const handleFavorite = async () => {
        setIsFavorite((prevState) => !prevState);
        if (user) {
            await addFavoriteStatus(user, isFavorite, itemId);
        }
    };

    return [isFavorite, handleFavorite];
};

export default useFavoriteStatus;
