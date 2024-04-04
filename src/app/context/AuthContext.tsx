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
import { auth } from "@/firebase/config";
import { AuthContextType } from "@/Types/AuthContext";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const signUp = (name: string, email: string, password: string) => {
    if (name.trim() && email.trim() && password.trim()) {
      const createUser = createUserWithEmailAndPassword(auth, email, password);
      const updateUser = createUser.then((data) =>
        updateProfile(data.user, { displayName: name })
      );
      Promise.all([createUser, updateUser]).then((data) => {
        router.push("/psychologists");
      });
    }
  };

  const signIn = (email: string, password: string) => {
    if (email.trim() && password.trim()) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          router.push("/psychologists");
        })
        .catch((rej) => {
          console.log(rej.code);
        });
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  const googleSingIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
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
