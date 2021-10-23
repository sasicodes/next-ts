import { PrismaClient } from '@prisma/client'
import { userData } from './data/user'

const db = new PrismaClient()

async function main() {
  await db.user.deleteMany()
  console.log('All users are deleted 🗑️')
  console.log(`Seeding users 👦👦👦`)
  await db.user.createMany({
    data: userData
  })
}

main()
  .catch((error) => {
    console.error(error)
  })
  .finally(async () => {
    await db.$disconnect()
  })
