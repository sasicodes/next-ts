This is a [NextJS](https://nextjs.org/) typescript project with Prisma ORM and Apollo GraphQL.

## Getting Started

Install all your dependencies using,
```bash
yarn

# or 

npm i
```

- Add your database url in environment variable `DATABASE_URL`. (replace .env.example to .env)

- Migrate your tables from `prisma.schema` to database using,
```
prisma migrate dev
```
Once done, run your development server using,
```bash
npm run dev

# or

yarn dev
```

(Optional) Start your prisma studio using,

```
npx prisma studio
```

## Servers

- NextJS - https://localhost:3000
- Apollo Playgroud - https://localhost:3000/api/graphql
- Prisma Studio - https://localhost:5000

## Usage

 `nexus` - to generate schema for typescript

 - In `nexus` we have to define the types manually

 Using `codegen` to generate types for our application based on `schema.graphql` as input