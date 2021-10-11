import db from '@Lib/prisma-client'
import { PrismaClient } from '@prisma/client'

export type Context = {
  db: PrismaClient
}
export async function context(): Promise<Context> {
  return {
    db
  }
}
