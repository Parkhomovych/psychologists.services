import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "@/firebase/config";
import { AuthContextType } from "@/Types/AuthContext";
import { useRouter } from "next/navigation";
import errorMessage from "@/hooks/errorMessage";
import { RotatingLines } from "react-loader-spinner";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();


  const signUp = async (name: string, email: string, password: string) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(data.user, { displayName: name });

      if (data.user) {
        await setDoc(doc(db, "users", data.user.uid), { favorites: [] });
      }
      router.push("/psychologists");
    } catch (error: any) {
      errorMessage(error.code);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      if (email.trim() && password.trim()) {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/psychologists");
      }
    } catch (error: any) {
      errorMessage(error.code);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      router.push("/psychologists");
    } catch (error) {
      console.error(error);
    }
  };

  const googleSingIn = async () => {
    const provider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, provider);
    if (data.user.uid) {
      await setDoc(doc(db, "users", data.user.uid), { favorites: [] });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signUp, signIn, logOut, googleSingIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useUserAuth must be used within an AuthContextProvider");
  }
  return context;
};
