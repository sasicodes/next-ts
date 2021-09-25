import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const QUERY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
    }
  }
`

export default function CountryDetail() {
  const router = useRouter()

  const { data, loading, error } = useQuery(QUERY, {
    variables: {
      code: router.query.country
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
  const { name } = data.country

  return (
    <div className="container h-screen mx-auto">
      <div className="my-20 text-center">
        <h1 className="mb-5 text-4xl font-bold">{name}</h1>
      </div>
    </div>
  )
}
