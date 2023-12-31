import { notFound } from 'next/navigation'

import { Blocks } from '@/components/block/Block'
import Profile from '@/components/common/Profile/Profile'
import PageInfo from '@/components/page/blog/PageInfo/PageInfo'
import { getPageData } from '@/util/getPageData'

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
    const pageData = await getPageData(slug)
    if (!pageData) {
        notFound()
    }
    return (
        <main className='mx-auto max-w-4xl space-y-12 px-3 py-6'>
            <PageInfo
                {...pageData}
                image={pageData.image ?? '/no_image.jpg'}
                publishDate={pageData.publishDate ?? '1970'}
            />
            <div className='rounded-md border border-orange-200 bg-white p-6 md:p-9'>
                <Blocks datas={pageData.blocks} />
            </div>
            <Profile />
        </main>
    )
}

export default Page
