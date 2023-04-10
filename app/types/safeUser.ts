import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  emailVerified: string | null
  updatedAt: string
  createdAt: string
}