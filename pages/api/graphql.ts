import { context } from '@GraphQL/context'
import { schema } from '@GraphQL/schema'
import { IS_PRODUCTION } from '@Utils/constants'
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'

const apolloServer = new ApolloServer({
  schema,
  context,
  // apollo removed GraphQL playground after verison >= 3 by default, we can enable it by these plugins
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

// NextJs parses the body by default and so we are disabling it
export const config = {
  api: {
    bodyParser: false
  }
}
