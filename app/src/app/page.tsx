import fs from 'fs'

import LinkButton from '@/components/block/LinkButton'
import Carousel from '@/components/common/carousel/Carousel'
import { Page } from '@/type/page/page'

import BlogPages from './BlogPages'

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL

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

export default async function Home() {
    // const pageData: Page[] = await fetch(
    //     `${NEXT_PUBLIC_URL}/data/pages.json`,
    // ).then((res) => res.json())
    const pageData: Page[] = getPageData()
    pageData.sort((a, b) => {
        return (
            new Date(b.publishDate ?? '1970-01-01').getTime() -
            new Date(a.publishDate ?? '1970-01-01').getTime()
        )
    })
    const carouselData = pageData.map((page) => {
        return {
            image: page.image ?? '/no_image.jpg',
            publishDate: page.publishDate ?? '1970-01-01',
            title: page.title,
            tags: page.tags,
            slug: page.slug,
        }
    })

    return (
        <main className='mx-auto max-w-4xl space-y-4 pb-4'>
            <Carousel data={carouselData}></Carousel>
            <BlogPages pageData={pageData} />
        </main>
    )
}
