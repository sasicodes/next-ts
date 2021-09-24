This is a [Next.js](https://nextjs.org/) project with Prisma, Typescript, GraphQL.

## Getting Started

1. Install all your dependencies using,
```bash
yarn

# or 

npm i
```
2. Add your database url in environment variable `DATABASE_URL`. (replace .env.example to .env)
3. Migrate your tables from `prisma.schema` to database using,
```
prisma migrate dev --name init
```
Once done, run your development server using,
```bash
npm run dev

# or

yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.