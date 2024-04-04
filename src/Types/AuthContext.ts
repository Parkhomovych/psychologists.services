import { User } from "firebase/auth";

export interface AuthContextType {
  user: User | null;
  googleSingIn: () => void;
  logOut: () => void;
  signIn: (email: string, password: string) => void;
  signUp: (name: string, email: string, password: string) => void;
}