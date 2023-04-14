import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

import prisma from '../../../app/libs/prismadb'
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
        };
      },
    }),
    CredentialsProvider({
      name: 'credentails',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'text' }
      },
      async authorize(credentails) {
        if (!credentails?.email || !credentails.password) {
          throw new Error('Invalid Credentials')
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentails.email
          }
        })

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid Credentials')
        }

        const isCorectPassword = await bcrypt.compare(
          credentails.password,
          user.hashedPassword
        )

        if (!isCorectPassword) {
          throw new Error('Invalid Credencials')
        }

        return user
      }
    })
  ],
  pages: {
    signIn: '/'
  },
 // debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)
