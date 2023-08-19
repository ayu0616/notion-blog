import Block from '@/components/block/Block'
import PageInfo from '@/components/page/blog/pageInfo/PageInfo'

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
    const pageData: PageData = await fetch(
        `${NEXT_PUBLIC_URL}/data/page/${slug}.json`,
    ).then((res) => res.json())
    return (
        <main className='mx-auto max-w-4xl space-y-4 bg-white p-6'>
            <PageInfo
                {...pageData}
                publishDate={pageData.publishDate ?? '1970'}
                image={pageData.image ?? '/no_image.jpg'}
            />
            {pageData.blocks.map((block, index) => {
                return <Block key={index} data={block} />
            })}
        </main>
    )
}

export default Page
