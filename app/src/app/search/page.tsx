import Heading from '@/components/block/Heading/Heading'
import { Page } from '@/type/page/page'
import { getPages } from '@/util/getPageData'

import BlogPages from '../../components/page/index/BlogPages/BlogPages'

const Page = async ({
    searchParams: { query },
}: {
    searchParams: { query: string }
}) => {
    const pageData: Page[] = await getPages()
    // pageData = pageData.filter((page) => {
    //     return page.title.includes(query)
    // })
    pageData.sort((a, b) => {
        return (
            new Date(b.publishDate ?? '1970-01-01').getTime() -
            new Date(a.publishDate ?? '1970-01-01').getTime()
        )
    })
    return (
        <main className='mx-auto max-w-4xl space-y-4 py-4'>
            <Heading className='px-4' level={3}>
                「{query}」の検索結果
            </Heading>
            <BlogPages
                searchDefaultOpen
                pageData={pageData}
                searchDefaultValue={query}
            />
        </main>
    )
}

export default Page
