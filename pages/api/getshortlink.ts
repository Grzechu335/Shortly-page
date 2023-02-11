// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError, AxiosResponse } from 'axios'

interface MyDataFormat {
    url: {
        status: number
        fullLink: string
        date: string
        shortLink: string
        title: string
    }
}

export interface MyAxiosResponse extends AxiosResponse {
    data: MyDataFormat
}

interface Response {
    data: MyDataFormat
}

interface Error {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response | Error>
) {
    const urlToShort = req.headers.url
    const url =
        'https://cutt.ly/api/api.php?' +
        new URLSearchParams({
            key: `${process.env.CUTTLY_API_KEY}`,
            short: `${urlToShort}`,
        }).toString()
    res.setHeader(
        'Access-Control-Allow-Origin',
        `${process.env.NEXT_PUBLIC_HOST_URL}`
    )

    try {
        const link: MyAxiosResponse = await axios.get(url)
        if (link.status === 200) {
            const data = link.data
            res.status(200).json({ data })
        }
    } catch (err) {
        const error = err as AxiosError
        if (error.response?.status === 429) {
            res.status(429).json({
                message: 'to many request',
            })
        }
    }
}
