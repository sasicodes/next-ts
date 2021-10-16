import { gql } from '@apollo/client'
import { User } from 'graphql/generated/types'
import apolloClient from 'lib/apollo-client'
import Link from 'next/link'

export default function Home({ users }: { users: User[] }) {
  return (
    <div className="container h-screen mx-auto">
      <div className="my-20 text-center">
        <h1 className="mb-5 text-4xl font-bold">Hello there!</h1>
        <p>
          The following data is fetched from a local '/api/graphql' endpoint.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {users.map((user: User) => (
          <Link href={`/${user.id}`} key={user.id}>
            <a className="p-4 text-center bg-gray-100 rounded-lg">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

const ALL_USERS_QUERY = gql`
  query Users {
    users {
      email
      name
      id
    }
  }
`

export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: ALL_USERS_QUERY
  })

  return {
    props: {
      users: data.users
    }
  }
}
