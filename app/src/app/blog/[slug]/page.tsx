import { Blocks } from '@/components/block/Block'
import Profile from '@/components/common/Profile/Profile'
import PageInfo from '@/components/page/blog/PageInfo/PageInfo'
import { getPageData } from '@/util/getPageData'

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
    const pageData = await getPageData(slug)
    if (!pageData) {
        return {
            notFound: true,
        }
    }
    return (
        <main className='mx-auto max-w-4xl space-y-12 bg-white p-6'>
            <PageInfo
                {...pageData}
                image={pageData.image ?? '/no_image.jpg'}
                publishDate={pageData.publishDate ?? '1970'}
            />
            <div>
                <Blocks datas={pageData.blocks} />
            </div>
            <Profile />
        </main>
    )
}

export default Page
