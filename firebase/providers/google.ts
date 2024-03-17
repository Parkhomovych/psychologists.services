import { auth } from "../config";
import { GoogleAuthProvider, signInWithPopup, linkWithPopup } from "firebase/auth";
import type { UserCredential, User } from "firebase/auth";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();

export const googleAuth = () => {
  signInWithPopup(auth, provider)
    .then((result: UserCredential) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      const token = credential?.accessToken;
      toast.success(`Welcome ${user.displayName}`)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

