import { Blocks } from '@/components/block/Block'
import LinkButton from '@/components/block/LinkButton'
import Profile from '@/components/common/profile/Profile'
import PageInfo from '@/components/page/blog/pageInfo/PageInfo'
import { Page as PageData } from '@/type/page/page'
import fs from 'fs'

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
    // const pageData: PageData = await fetch(
    //     `${NEXT_PUBLIC_URL}/data/page/${slug}.json`,
    // ).then((res) => res.json())
    const pageData: PageData = JSON.parse(
        fs.readFileSync(`./public/data/page/${slug}.json`, 'utf-8'),
    )
    return (
        <main className='mx-auto max-w-4xl space-y-4 bg-white p-6'>
            <PageInfo
                {...pageData}
                publishDate={pageData.publishDate ?? '1970'}
                image={pageData.image ?? '/no_image.jpg'}
            />
            <div>
                <LinkButton href='https://zenn.dev/yoshimok/articles/176be565d030b3'></LinkButton>
            </div>
            {/* {pageData.blocks.map((block, index) => {
                return <Block key={index} data={block} />
            })} */}
            <Blocks datas={pageData.blocks} />
            <Profile />
        </main>
    )
}

export default Page
