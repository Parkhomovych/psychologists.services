import { User } from "firebase/auth";
import { FormEvent } from "react";

export interface AuthContextType {
  user: User | null;
  googleSingIn: () => void;
  logOut: () => void;
  signIn: (e: FormEvent<HTMLFormElement>) => void;
  signUp: (e: FormEvent<HTMLFormElement>) => void;
}