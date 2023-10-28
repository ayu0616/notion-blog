import Carousel from '@/components/common/Carousel/Carousel'
import { Page } from '@/type/page/page'
import getPageData from '@/util/getPageData'

import BlogPages from '../components/page/index/BlogPages/BlogPages'

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL

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
