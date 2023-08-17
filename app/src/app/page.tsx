import Card from '@/components/common/Card'
import Image from '@/components/common/ImageBase'
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
    return (
        <main>
            <div className='grid gap-4 p-4'>
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
                                    <TagList tagData={page.tags}></TagList>
                                    <p className='text-end text-sm text-gray-600'>
                                        {dateToStr(
                                            new Date(page.lastEditedTime),
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
