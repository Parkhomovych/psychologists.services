import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config";
import toast from "react-hot-toast";

export const Registration = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, { displayName: name })
                .then(() => {
                    console.log(`Профіль користувача оновлено з ${name}`);
                })
                .catch((error) => {
                    console.error('Помилка оновлення профілю користувача: ', error);
                });
        })
        .catch((error) => {
            const errorCode = error.code as string;
            if (errorCode === "auth/email-already-in-use") {
                toast.error("Email already in use");
            }
            if (errorCode === "auth/weak-password") {
                toast.error("Password should be at least 6 characters");
            }
        });
};

export const LogIn = (e: any) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            toast.error("Email or password is not valid");
        });
};

export const LogOut = (e: any) => {
    signOut(auth).then(() => {
        toast.success('Sign-out successful')
    }).catch((error) => {
        // An error happened.
        console.log(error);

    });
};
