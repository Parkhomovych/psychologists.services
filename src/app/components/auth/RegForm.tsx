"use client";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useEffect, useState } from "react";
import { auth } from "../../../../firebase/config";

export default function RegForm() {
  const [showPass, setshowPass] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userToken, setUserToken] = useState("");
  const [userRefreshToken, setUserRefreshToken] = useState("");
  useEffect(() => {
    if (userName) {
      localStorage.setItem("userName", JSON.stringify(userName));
    }
    if (userEmail) {
      localStorage.setItem("userEmail", JSON.stringify(userEmail));
    }
    if (userToken) {
      localStorage.setItem("userToken", JSON.stringify(userToken));
    }
    if (userRefreshToken) {
      localStorage.setItem(
        "userRefreshToken",
        JSON.stringify(userRefreshToken)
      );
    }
  }, [userEmail, userName, userRefreshToken, userToken]);

  const registration = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserEmail(user.email as string);
        setUserRefreshToken(user.refreshToken as string);

        const token = user.getIdToken().then((token) => {
          setUserToken(token as string);
        });
        updateProfile(user, { displayName: name })
          .then(() => {
            setUserName(name);
            console.log(`Профіль користувача оновлено з ${name}`);
          })
          .catch((error) => {
            console.error("Помилка оновлення профілю користувача: ", error);
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
  return (
    <>
      <Toaster />
      <form onSubmit={registration} className="flex flex-wrap ">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input w-[438px] mb-4"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input w-[438px] mb-4"
          required
        />
        <div className=" relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input w-[438px] mb-10"
            required
          />

          <button
            type="button"
            className=" w-5 h-5 absolute top-4 right-[18px] text-black dark:text-gray-50 hover:text-activeGreen active:text-activeGreen animateColor"
            onClick={() => {
              setshowPass((pS) => !pS);
            }}
          >
            {showPass ? (
              <LuEye className=" w-5 h-5 " />
            ) : (
              <LuEyeOff className=" w-5 h-5 " />
            )}
          </button>
        </div>
        <button className=" w-[438px] h-[52px] flex items-center justify-center bg-green  rounded-[30px] hover:bg-activeGreen animateColor">
          <span className=" font-medium text-base text-white">
            Registration
          </span>
        </button>
      </form>
    </>
  );
}
