import db from '@Lib/prisma-client'
import { PrismaClient } from '@prisma/client'

export type Context = {
  db: PrismaClient
}
export async function createContext(): Promise<Context> {
  return {
    db
  }
}
