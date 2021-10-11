import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const USER_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      name
      email
    }
  }
`

export default function UserDetail() {
  const router = useRouter()

  const { data, loading, error } = useQuery(USER_QUERY, {
    variables: {
      id: router.query.userId
    },
    skip: !router.isReady
  })
  if (loading || !data) {
    return <h2>Loading...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }
  const { name, email } = data.user

  return (
    <div className="container h-screen mx-auto">
      <div className="my-20 text-center">
        <h1 className="mb-5 text-4xl font-bold">{name}</h1>
        <p className="mb-5 text-xl font-bold">{email}</p>
      </div>
    </div>
  )
}
