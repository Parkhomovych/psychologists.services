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
import { Toaster } from "react-hot-toast";
import errorMessage from "@/hooks/errorMessage";
import { RotatingLines } from "react-loader-spinner";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signUp = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      const data = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(data.user, { displayName: name });

      if (data.user) {
        await setDoc(doc(db, "users", data.user.uid), { favorites: [] });
      }
      router.push("/psychologists");
    } catch (error: any) {
      errorMessage(error.code);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      if (email.trim() && password.trim()) {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/psychologists");
      }
    } catch (error: any) {
      errorMessage(error.code);
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      router.push("/psychologists");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
      <Toaster />
      {loading ? (
        <div className=" h-screen flex items-center justify-center">
          <RotatingLines
            visible={true}
            width="124"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      ) : (
        children
      )}
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
