import { PrismaClient } from '@prisma/client'
import db from 'lib/prisma-client'

export type Context = {
  db: PrismaClient
}
export async function context(): Promise<Context> {
  return {
    db
  }
}
