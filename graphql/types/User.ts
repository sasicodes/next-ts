import { extendType, nonNull, objectType, stringArg } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id')
    t.string('email')
    t.string('name')
  }
})

export const UsersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('users', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return ctx.db.user.findMany()
      }
    })
  }
})

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      type: 'User',
      args: { id: nonNull(stringArg()) },
      resolve: (_parent, args, ctx) => {
        return ctx.db.user.findUnique({ where: { id: args.id } })
      }
    })
  }
})

export const CreateUserQuery = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createUser', {
      type: 'User',
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg())
      },
      resolve: (_parent, args, ctx) => {
        return ctx.db.user.create({ data: args })
      }
    })
  }
})
