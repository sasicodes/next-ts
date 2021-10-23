import { extendType, nonNull, stringArg } from 'nexus'

export const SignUpQuery = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('signUp', {
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
