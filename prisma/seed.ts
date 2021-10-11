import { PrismaClient } from '.prisma/client'

const db = new PrismaClient()

async function main() {
  await db.user.deleteMany()
  console.log('All users are deleted 🗑️')

  // Fake User
  await db.user.create({
    data: {
      email: `user1@localhost.com`,
      name: `FakeUser1`
    }
  })
  await db.user.create({
    data: {
      email: `user2@localhost.com`,
      name: `FakeUser2`
    }
  })
}

main()
  .catch((error) => {
    console.error(error)
  })
  .finally(async () => {
    await db.$disconnect()
  })
