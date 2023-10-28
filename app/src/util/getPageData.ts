import { Page } from '@/type/page/page'

import _pageData from '../../public/data/pages.json'

const getPageData = () => {
    const pageData = _pageData as Page[]
    if (process.env.NODE_ENV === 'development') {
        return pageData
    } else {
        return pageData.filter((page) => {
            return page.status === 'published'
        })
    }
}

export default getPageData
