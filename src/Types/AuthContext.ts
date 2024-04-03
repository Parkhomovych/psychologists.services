import { User } from "firebase/auth";

export interface AuthContextType {
    user: User | null;
    googleSingIn: () => void;
    logOut: () => void;
  }