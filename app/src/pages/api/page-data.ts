import { JSDOM } from 'jsdom'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const url = req.query.url
        if (typeof url !== 'string') {
            return res.status(400).json({ message: 'Bad request' })
        }
        const html = await fetch(url).then((res) => res.text())
        const parser = new JSDOM(html)
        const doc = parser.window.document
        const title = doc.querySelector('title')?.textContent ?? url
        const description =
            doc
                .querySelector('meta[name="description"]')
                ?.getAttribute('content') ?? ''
        const iconUrl = `http://www.google.com/s2/favicons?domain=${url}`

        res.status(200).json({ title, description, iconUrl })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
