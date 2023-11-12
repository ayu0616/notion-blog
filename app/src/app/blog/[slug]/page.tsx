import fs from 'fs'

import { Blocks } from '@/components/block/Block'
import Profile from '@/components/common/Profile/Profile'
import PageInfo from '@/components/page/blog/PageInfo/PageInfo'
import { Page as PageData } from '@/type/page/page'

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
    // const pageData: PageData = await fetch(
    //     `${NEXT_PUBLIC_URL}/data/page/${slug}.json`,
    // ).then((res) => res.json())
    const pageData: PageData = JSON.parse(
        fs.readFileSync(`./public/data/pages/${slug}/data.json`, 'utf-8'),
    )
    return (
        <main className='mx-auto max-w-4xl space-y-12 bg-white p-6'>
            <PageInfo
                {...pageData}
                publishDate={pageData.publishDate ?? '1970'}
                image={pageData.image ?? '/no_image.jpg'}
            />
            <div>
                <Blocks datas={pageData.blocks} />
            </div>
            <Profile />
        </main>
    )
}

export default Page
