import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {



    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/auth.user
    //         const uid = user.uid;
    //         console.log(uid);

    //         // ...
    //     } else {
    //         console.log(2);

    //         // User is signed out
    //         // ...
    //     }
    // });
    return NextResponse.json({ message: 'good' })
}
