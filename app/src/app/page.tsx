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
            image: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1d037251-36fe-4636-9f55-87e282a39f7b/Nextjs-logo.svg.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230815T000841Z&X-Amz-Expires=3600&X-Amz-Signature=24a7103a6f8b25f068835d724e496b9522d93525d1c811720224d619184c2d00&X-Amz-SignedHeaders=host&x-id=GetObject',
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
                            <Card imgSrc={page?.image ?? ''} horizontal>
                                <h3>{page.title}</h3>
                                <p>{page.description}</p>
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
