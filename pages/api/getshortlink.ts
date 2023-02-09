// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
    link: Response
}

type Response = {
    link: {
        url: {
            status: number
            fullLink: string
            date: string
            shortLink: string
            title: string
        }
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const urlToShort = req.headers.url
    const url =
        'https://cutt.ly/api/api.php?' +
        new URLSearchParams({
            key: `${process.env.NEXT_PUBLIC_CUTTLY_API_KEY}`,
            short: `${urlToShort}`,
        }).toString()

    const link: Response = await axios.get(url).then((res) => res.data)
    console.log(link)
    res.status(200).json({ link })
}