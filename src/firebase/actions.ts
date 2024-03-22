'use server'

import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function registration(formData: FormData,) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (name && email && password) {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password)
      const user = data.user
      const token = await user.getIdToken()
      if (user) {
        await updateProfile(user, { displayName: name })
        cookies().set('name', name || "", { httpOnly: true })
        cookies().set('token', token || "", { httpOnly: true })
        cookies().set('avatar', user?.photoURL || "", { httpOnly: true })
        return 'success'
      }
    } catch (error: any) {
      if (error?.code === 'auth/email-already-in-use') {
        return 'auth/email-already-in-use'
      }
      if (error?.code === 'auth/weak-password') {
        return 'auth/weak-password'
      }
      console.log(error?.code);
      console.log(error?.message);
    }
  }

}

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (email && password) {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password)
      const user = data.user
      const token = await user.getIdToken()
      cookies().set('token', token || "", { httpOnly: true })
      cookies().set('name', user?.displayName || "", { httpOnly: true })
      cookies().set('avatar', user?.photoURL || "", { httpOnly: true })
      return 'success'
    } catch (error: any) {
      console.log(error?.code);
      console.log(error?.message);

      if (error?.code === 'auth/invalid-credential') {
        return 'auth/invalid-credential'
      }
    }
  }
}

export async function logout() {
  try {
    signOut(auth)
    cookies().delete('token')
    cookies().delete('name')
    cookies().delete('avatar')
  } catch (error) {
    console.log(error);
  }
}