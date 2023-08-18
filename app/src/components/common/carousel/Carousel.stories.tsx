import type { Meta, StoryObj } from '@storybook/react'

import Carousel from './Carousel'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Carousel',
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
        srcList: [
            'https://www.fukushimatrip.com/wp-content/uploads/IGP1893-2-670x447.jpg',
            'https://www.kankou-gifu.jp/lsc/upfile/spot/0000/1363/1363_5_l.jpg',
            'https://tori-dori.com/wp/wp-content/uploads/BP19-080812.jpg',
        ],
    },
    render: (args) => (
        <div style={{width: "calc(100vw - 2rem)"}}>
            <Carousel {...args} />
        </div>
    ),
}
