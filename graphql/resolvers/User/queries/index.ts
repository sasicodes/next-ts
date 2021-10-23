import { extendType, nonNull, stringArg } from 'nexus'

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
