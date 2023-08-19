import Card from '@/components/common/Card'
import Image from '@/components/common/ImageBase'
import Carousel from '@/components/common/carousel/Carousel'
import TagList from '@/components/common/tag/TagList'
import { Page } from '@/type/page/page'
import dateToStr from '@/util/dateToStr'
import Link from 'next/link'

export default function Home() {
    const mockData: Page[] = [
        {
            id: '9b548af9-e899-4002-8202-613be38bceac',
            title: 'Notionで書いたブログをウェブページとして公開してみた【Next.js】',
            tags: [{ name: 'プログラミング', color: 'blue' }],
            lastEditedTime: '2023-08-11T07:10:00.000Z',
            slug: 'notion-blog-nextjs',
            status: 'writing',
            publishDate: null,
            blocks: [],
            image: null,
            description:
                'Notionのページをブログとして公開したいと思ったのでNext.jsを利用して自作することにしました',
        },
        {
            id: 'f803988f-6182-4d9b-a688-37a463669ef0',
            title: 'テストページ',
            tags: [{ name: 'プログラミング', color: 'blue' }],
            lastEditedTime: '2023-08-11T02:00:00.000Z',
            slug: 'test',
            status: 'published',
            publishDate: '2023-08-11',
            blocks: [],
            image: 'https://4.bp.blogspot.com/-NpzSXawlkuQ/WaPwHY3hy_I/AAAAAAABGR8/VjeNZ-J7RdYJmhcEecLUY9q9_GMERe0NACLcBGAs/s800/test_print_happy_schoolgirl.png',
            description:
                'これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。',
        },
    ]
    const carouselData = mockData.map((page) => {
        return {
            image: page.image ?? '/no_image.jpg',
            publishDate: page.publishDate ?? '1970-01-01',
            title: page.title,
            tags: page.tags,
            slug: page.slug,
        }
    })
    return (
        <main className='mx-auto max-w-4xl space-y-4'>
            <Carousel data={carouselData}></Carousel>
            <div className='grid gap-4 px-4'>
                {mockData.map((page, i) => {
                    return (
                        <Link href={`/blog/${page.slug}`} key={i}>
                            <Card horizontal className=''>
                                <Image
                                    src={page.image ?? '/no_image.jpg'}
                                    alt=''
                                    className='w-1/3 rounded-l-md'
                                    objectFit='cover'
                                ></Image>
                                <div className='flex flex-1 flex-col gap-2 p-3'>
                                    <h3>{page.title}</h3>
                                    <TagList
                                        isLink
                                        tagData={page.tags}
                                    ></TagList>
                                    <p className='text-end text-sm text-gray-600'>
                                        {dateToStr(
                                            new Date(page.publishDate ?? 0),
                                        )}
                                    </p>
                                    <p>{page.description}</p>
                                </div>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}
