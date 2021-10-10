import { PrismaClient } from '@prisma/client'
import { IS_PRODUCTION } from 'utils/constants'

// `prisma` implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
declare global {
  var __globalPrisma__: PrismaClient
}

let db: PrismaClient

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
if (IS_PRODUCTION) {
  db = new PrismaClient({
    log: ['error', 'warn']
  })
} else {
  if (!global.__globalPrisma__) {
    global.__globalPrisma__ = new PrismaClient()
  }
  db = global.__globalPrisma__
}

export default db