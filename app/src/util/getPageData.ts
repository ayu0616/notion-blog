import fs from 'fs'

import { Page } from '@/type/page/page'

const getPageData = () => {
    const pageData: Page[] = JSON.parse(
        fs.readFileSync('./public/data/pages.json', 'utf-8'),
    )
    if (process.env.NODE_ENV === 'development') {
        return pageData
    } else {
        return pageData.filter((page) => {
            return page.status === 'published'
        })
    }
}

export default getPageData
