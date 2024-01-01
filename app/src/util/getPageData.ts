import { Page } from '@/type/page/page'

const apiUrl = process.env.NEXT_API_URL

export const getPages = async () => {
    const url = new URL('/pages', apiUrl)
    const pageData = (await fetch(url)
        .then((res) => res.json())
        .catch(() => [])) as Page[]
    if (process.env.NODE_ENV === 'production') {
        return pageData.filter((page) => {
            return page.status === 'published'
        })
    }
    return pageData
}

export const getPageData = async (slug: string) => {
    const url = new URL(`pages/${slug}`, apiUrl)
    const pageData = (await fetch(url)
        .then((res) => {
            if (!res.ok) return null
            return res.json()
        })
        .catch(() => null)) as Page | null
    if (!pageData) return null
    if (process.env.NODE_ENV === 'production') {
        if (pageData.status === 'published') {
            return pageData
        } else {
            return null
        }
    }
    return pageData
}
