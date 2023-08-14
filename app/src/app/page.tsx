import Card from '@/stories/Card'
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
        },
    ]
    return (
        <main>
            <div className='grid gap-4 p-4'>
                {mockData.map((page, i) => {
                    return (
                        <Link href={`/blog/${page.slug}`} key={i}>
                            <Card>
                                <h2>{page.title}</h2>
                                <p>
                                    {dateToStr(new Date(page.lastEditedTime))}
                                </p>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}
