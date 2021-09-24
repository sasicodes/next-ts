import { gql } from '@apollo/client'
import client from '@GraphQL/apollo-client'

export default function Home({ countries }: { countries: any }) {
  return (
    <div className="container h-screen mx-auto">
      <div className="my-20 text-center">
        <h1 className="mb-5 text-4xl font-bold">Welcome</h1>
        <p>The following data is fetched from a external gql endpoint.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {countries.map((country: any) => (
          <div
            key={country.code}
            className="p-4 text-center bg-gray-100 rounded-lg"
          >
            <h3>{country.name}</h3>
            <p>
              {country.code} - {country.emoji}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `
  })

  return {
    props: {
      countries: data.countries.slice(0, 9)
    }
  }
}
