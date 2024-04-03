import {
  FormEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "@/firebase/config";
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
import { AuthContextType } from "@/Types/AuthContext";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const signUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      elements: {
        name: { value: string };
        email: { value: string };
        password: { value: string };
      };
    };
    const { name, email, password } = target.elements;

    if (name.value.trim() && email.value.trim() && password.value.trim()) {
      const createUser = createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      const updateUser = createUser.then((data) =>
        updateProfile(data.user, { displayName: name.value })
      );
      Promise.all([createUser, updateUser]).then((data) => {
        router.push("/psychologists");
      });
    }
  };

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      elements: {
        email: { value: string };
        password: { value: string };
      };
    };
    const { email, password } = target.elements;

    if (email.value.trim() && password.value.trim()) {
      signInWithEmailAndPassword(auth, email.value, password.value)
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
      value={{ user, googleSingIn, logOut, signIn, signUp }}
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
