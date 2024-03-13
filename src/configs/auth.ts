
import type { AuthOptions, User } from "next-auth";
import GoogleProviders from 'next-auth/providers/google'
import Credentials from "next-auth/providers/credentials";


export const authConfig: AuthOptions = {
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        }),
        // Credentials({
        //     credentials: {
        //         email: { label: 'email', type: 'email', required: true },
        //         password: { label: 'password', type: 'password', required: true },

        //     },
        //     async authorize(credentials) {
        //         if (!credentials?.email || !credentials?.password) return null
        //         return { email: '123@123' } as User

        //     },

        // })
    ]
}