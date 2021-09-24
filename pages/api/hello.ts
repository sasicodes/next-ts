import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const handler = (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'Ok' })
}

export default handler
