import { Page } from '@/type/page/page'
import fs from 'fs'
import { glob } from 'glob'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ pageData: Page[] }>,
) {
    switch (req.method) {
        case 'GET':
            const { slug } = req.query
            if (slug) {
                const pageData = JSON.parse(
                    fs.readFileSync(
                        `../../../../get-pages/data/${slug}.json`,
                        'utf8',
                    ),
                )
                res.status(200).json({ pageData })
            } else {
                const pages = glob.sync('../get-pages/data/*.json')
                const pageData = pages.map((page) => {
                    return JSON.parse(fs.readFileSync(page, 'utf8'))
                })
                res.status(200).json({ pageData })
            }
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
