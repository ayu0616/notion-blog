import Carousel from './Carousel'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    component: Carousel,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        // srcList: [
        //     'https://www.fukushimatrip.com/wp-content/uploads/IGP1893-2-670x447.jpg',
        //     'https://www.kankou-gifu.jp/lsc/upfile/spot/0000/1363/1363_5_l.jpg',
        //     'https://tori-dori.com/wp/wp-content/uploads/BP19-080812.jpg',
        // ],
        data: [
            {
                image: 'https://www.fukushimatrip.com/wp-content/uploads/IGP1893-2-670x447.jpg',
                title: '新潟・福島2泊3日旅',
                publishDate: '2021-01-01T00:00:00.000Z',
                tags: [
                    {
                        name: '新潟',
                        color: 'yellow',
                    },
                    {
                        name: '旅行',
                        color: 'blue',
                    },
                ],
                slug: 'niigata-fukushima',
            },
            {
                image: 'https://www.kankou-gifu.jp/lsc/upfile/spot/0000/1363/1363_5_l.jpg',
                title: '馬籠宿に行きたい話',
                publishDate: '2021-01-02T00:00:00.000Z',
                tags: [
                    {
                        name: '岐阜',
                        color: 'purple',
                    },
                    {
                        name: '旅行',
                        color: 'blue',
                    },
                ],
                slug: 'magome',
            },
            {
                image: 'https://tori-dori.com/wp/wp-content/uploads/BP19-080812.jpg',
                title: '清津峡に行ったらとんでもない絶景が待っていた！！！【新潟・越後湯沢】',
                publishDate: '2021-01-03T00:00:00.000Z',
                tags: [
                    {
                        name: '新潟',
                        color: 'yellow',
                    },
                    {
                        name: '旅行',
                        color: 'blue',
                    },
                ],
                slug: 'kizukyo',
            },
        ],
    },
    render: (args) => (
        <div style={{ width: 'calc(100vw - 2rem)' }}>
            <Carousel {...args} />
        </div>
    ),
}
