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
