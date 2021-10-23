import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-micro'
import { context } from 'graphql/context'
import { schema } from 'graphql/schema'
import { NextApiRequest, NextApiResponse } from 'next'
import { IS_PRODUCTION } from 'utils/constants'

const apolloServer = new ApolloServer({
  schema,
  context,
  // apollo removed GraphQL playground after version >= 3 by default, we can enable it by these plugins
  plugins: [
    IS_PRODUCTION
      ? ApolloServerPluginLandingPageProductionDefault()
      : ApolloServerPluginLandingPageGraphQLPlayground()
  ]
})

const startServer = apolloServer.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false
  }
}
