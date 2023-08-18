'use client'

import Block from '@/components/block/Block'
import PageInfo from '@/components/page/blog/pageInfo/PageInfo'
import { Page as PageData } from '@/type/page/page'
import { useParams } from 'next/navigation'

const data: PageData = {
    id: 'f803988f-6182-4d9b-a688-37a463669ef0',
    title: 'テストページ',
    tags: [{ name: 'プログラミング', color: 'blue' }],
    lastEditedTime: '2023-08-17T16:21:00.000Z',
    slug: 'test',
    status: 'published',
    publishDate: '2023-08-11',
    blocks: [
        {
            id: '4d99f2c3-f691-4b55-a321-f5ebd6ac3f0e',
            type: 'heading_1',
            hasChildren: false,
            children: null,
            richTexts: [
                {
                    type: 'text',
                    text: 'テスト',
                    href: null,
                    annotations: {
                        bold: false,
                        italic: false,
                        strikethrough: false,
                        underline: false,
                        code: false,
                        color: 'default',
                    },
                },
            ],
            color: 'default',
            isToggleable: false,
        },
        {
            id: '5fc30b12-28ba-491c-822f-1795191b20de',
            type: 'paragraph',
            hasChildren: false,
            children: null,
            richTexts: [
                {
                    type: 'text',
                    text: 'テスト',
                    href: null,
                    annotations: {
                        bold: false,
                        italic: false,
                        strikethrough: false,
                        underline: false,
                        code: false,
                        color: 'default',
                    },
                },
            ],
            color: 'default',
        },
        {
            id: 'e9a96586-5edf-4200-a299-b847c9bcd10d',
            type: 'bookmark',
            hasChildren: false,
            children: null,
            url: 'https://atcoder.jp/',
            caption: [],
        },
        {
            id: '62fdb0c8-6337-416a-83ef-f50618789226',
            type: 'paragraph',
            hasChildren: false,
            children: null,
            richTexts: [
                {
                    type: 'text',
                    text: 'AtCoder：競技プログラミングコンテストを開催する国内最大のサイト',
                    href: 'https://atcoder.jp/',
                    annotations: {
                        bold: false,
                        italic: false,
                        strikethrough: false,
                        underline: false,
                        code: false,
                        color: 'default',
                    },
                },
            ],
            color: 'default',
        },
        {
            id: '6785fcdd-3258-431c-83bf-c2e2e88816b3',
            type: 'code',
            hasChildren: false,
            children: null,
            richTexts: [
                {
                    type: 'text',
                    text: 'const a = "hogehoge";\nconst b = () => {\n    console.log(a);\n}\nb();\n',
                    href: null,
                    annotations: {
                        bold: false,
                        italic: false,
                        strikethrough: false,
                        underline: false,
                        code: false,
                        color: 'default',
                    },
                },
            ],
            language: 'javascript',
            caption: [],
        },
        {
            type: 'bulleted_list',
            listItems: [
                {
                    id: '35b5ddb8-e174-492b-a6b1-885044bc4cbd',
                    type: 'bulleted_list_item',
                    hasChildren: true,
                    children: [
                        {
                            type: 'bulleted_list',
                            listItems: [
                                {
                                    id: 'eb35ed67-2287-428a-8cfa-1df187a2c626',
                                    type: 'bulleted_list_item',
                                    hasChildren: false,
                                    children: null,
                                    richTexts: [
                                        {
                                            type: 'text',
                                            text: 'テスト',
                                            href: null,
                                            annotations: {
                                                bold: false,
                                                italic: false,
                                                strikethrough: false,
                                                underline: false,
                                                code: false,
                                                color: 'default',
                                            },
                                        },
                                    ],
                                    color: 'default',
                                },
                                {
                                    id: '22289f76-5916-4338-9d83-5667edaa72e0',
                                    type: 'bulleted_list_item',
                                    hasChildren: false,
                                    children: null,
                                    richTexts: [
                                        {
                                            type: 'text',
                                            text: 'テスト',
                                            href: null,
                                            annotations: {
                                                bold: false,
                                                italic: false,
                                                strikethrough: false,
                                                underline: false,
                                                code: false,
                                                color: 'default',
                                            },
                                        },
                                    ],
                                    color: 'default',
                                },
                            ],
                        },
                    ],
                    richTexts: [
                        {
                            type: 'text',
                            text: 'テスト',
                            href: null,
                            annotations: {
                                bold: false,
                                italic: false,
                                strikethrough: false,
                                underline: false,
                                code: false,
                                color: 'default',
                            },
                        },
                    ],
                    color: 'default',
                },
                {
                    id: '718c0b61-975a-4b28-8a45-39e627ece475',
                    type: 'bulleted_list_item',
                    hasChildren: true,
                    children: [
                        {
                            type: 'bulleted_list',
                            listItems: [
                                {
                                    id: '347989d5-8ee4-4624-a4e1-12c21068a540',
                                    type: 'bulleted_list_item',
                                    hasChildren: false,
                                    children: null,
                                    richTexts: [
                                        {
                                            type: 'text',
                                            text: 'テスト',
                                            href: null,
                                            annotations: {
                                                bold: false,
                                                italic: false,
                                                strikethrough: false,
                                                underline: false,
                                                code: false,
                                                color: 'default',
                                            },
                                        },
                                    ],
                                    color: 'default',
                                },
                            ],
                        },
                    ],
                    richTexts: [
                        {
                            type: 'text',
                            text: 'テスト',
                            href: null,
                            annotations: {
                                bold: false,
                                italic: false,
                                strikethrough: false,
                                underline: false,
                                code: false,
                                color: 'default',
                            },
                        },
                    ],
                    color: 'default',
                },
            ],
        },
        {
            id: '92239ecd-efc9-4b6b-9332-6a0e59903101',
            type: 'callout',
            hasChildren: true,
            children: [
                {
                    type: 'numbered_list',
                    listItems: [
                        {
                            id: 'f748e872-8693-4eb4-8cdc-b67151292077',
                            type: 'numbered_list_item',
                            hasChildren: true,
                            children: [
                                {
                                    type: 'numbered_list',
                                    listItems: [
                                        {
                                            id: 'b00a565e-427d-48c6-af70-496378c7d6ba',
                                            type: 'numbered_list_item',
                                            hasChildren: false,
                                            children: null,
                                            richTexts: [
                                                {
                                                    type: 'text',
                                                    text: 'テスト',
                                                    href: null,
                                                    annotations: {
                                                        bold: false,
                                                        italic: false,
                                                        strikethrough: false,
                                                        underline: false,
                                                        code: false,
                                                        color: 'default',
                                                    },
                                                },
                                            ],
                                            color: 'default',
                                        },
                                        {
                                            id: '9e0db26b-3ffb-4716-a601-13b81dbdb623',
                                            type: 'numbered_list_item',
                                            hasChildren: false,
                                            children: null,
                                            richTexts: [
                                                {
                                                    type: 'text',
                                                    text: 'テスト',
                                                    href: null,
                                                    annotations: {
                                                        bold: false,
                                                        italic: false,
                                                        strikethrough: false,
                                                        underline: false,
                                                        code: false,
                                                        color: 'default',
                                                    },
                                                },
                                            ],
                                            color: 'default',
                                        },
                                    ],
                                },
                            ],
                            richTexts: [
                                {
                                    type: 'text',
                                    text: 'テスト',
                                    href: null,
                                    annotations: {
                                        bold: false,
                                        italic: false,
                                        strikethrough: false,
                                        underline: false,
                                        code: false,
                                        color: 'default',
                                    },
                                },
                            ],
                            color: 'default',
                        },
                        {
                            id: 'f483528e-930e-40bb-9b74-da6f30c4693e',
                            type: 'numbered_list_item',
                            hasChildren: false,
                            children: null,
                            richTexts: [
                                {
                                    type: 'text',
                                    text: 'テスト',
                                    href: null,
                                    annotations: {
                                        bold: false,
                                        italic: false,
                                        strikethrough: false,
                                        underline: false,
                                        code: false,
                                        color: 'default',
                                    },
                                },
                            ],
                            color: 'default',
                        },
                        {
                            id: '7077e7f2-6865-487d-91c4-290c468e2062',
                            type: 'numbered_list_item',
                            hasChildren: true,
                            children: [
                                {
                                    type: 'numbered_list',
                                    listItems: [
                                        {
                                            id: '912c621b-c87a-4391-9cba-5c820ecfee00',
                                            type: 'numbered_list_item',
                                            hasChildren: false,
                                            children: null,
                                            richTexts: [
                                                {
                                                    type: 'text',
                                                    text: 'テスト',
                                                    href: null,
                                                    annotations: {
                                                        bold: false,
                                                        italic: false,
                                                        strikethrough: false,
                                                        underline: false,
                                                        code: false,
                                                        color: 'default',
                                                    },
                                                },
                                            ],
                                            color: 'default',
                                        },
                                    ],
                                },
                            ],
                            richTexts: [
                                {
                                    type: 'text',
                                    text: 'テスト',
                                    href: null,
                                    annotations: {
                                        bold: false,
                                        italic: false,
                                        strikethrough: false,
                                        underline: false,
                                        code: false,
                                        color: 'default',
                                    },
                                },
                            ],
                            color: 'default',
                        },
                    ],
                },
            ],
            icon: '💡',
            richTexts: [
                {
                    type: 'text',
                    text: 'テスト',
                    href: null,
                    annotations: {
                        bold: true,
                        italic: false,
                        strikethrough: false,
                        underline: false,
                        code: false,
                        color: 'default',
                    },
                },
            ],
            color: 'default',
        },
        {
            id: '76a516ca-0095-4d27-9bcd-21cf9b85462a',
            type: 'heading_2',
            hasChildren: false,
            children: null,
            richTexts: [
                {
                    type: 'text',
                    text: 'テスト',
                    href: null,
                    annotations: {
                        bold: false,
                        italic: false,
                        strikethrough: false,
                        underline: false,
                        code: false,
                        color: 'default',
                    },
                },
            ],
            color: 'green_background',
            isToggleable: false,
        },
    ],
    image: 'https://4.bp.blogspot.com/-NpzSXawlkuQ/WaPwHY3hy_I/AAAAAAABGR8/VjeNZ-J7RdYJmhcEecLUY9q9_GMERe0NACLcBGAs/s800/test_print_happy_schoolgirl.png',
    description:
        'これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。',
}

const Page = () => {
    const params = useParams()
    const slug = params?.slug ?? ''
    return (
        <main className='mx-auto flex max-w-4xl flex-col gap-4 bg-white p-6'>
            <PageInfo {...data} publishDate={data.publishDate ?? "1970"} />
            {data.blocks.map((block, index) => {
                return <Block key={index} data={block} />
            })}
        </main>
    )
}

export default Page
