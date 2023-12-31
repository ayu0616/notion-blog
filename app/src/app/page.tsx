import Carousel from '@/components/common/Carousel/Carousel'
import { Page } from '@/type/page/page'
import { getPages } from '@/util/getPageData'

import BlogPages from '../components/page/index/BlogPages/BlogPages'

export default async function Home() {
    const pageData: Page[] = await getPages()
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
            slug: page.slug,
            tags: page.tags,
            title: page.title,
        }
    })

    return (
        <main className='mx-auto max-w-4xl space-y-10 pb-4'>
            <Carousel data={carouselData}></Carousel>
            <BlogPages pageData={pageData} />
        </main>
    )
}
