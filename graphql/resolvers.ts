import db from '@Lib/prisma-client'

export const resolvers = {
  Query: {
    users: () => {
      return db.user.findMany()
    }
  }
}
