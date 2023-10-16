import image from '@/../public/no_image.jpg'

import PageInfo from './PageInfo'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    component: PageInfo,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof PageInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Notionで書いたブログをウェブページとして公開してみた【Next.js】',
        tags: [
            { name: 'プログラミング', color: 'blue' },
            { name: 'Notion', color: 'gray' },
            { name: 'JavaScript', color: 'yellow' },
        ],
        publishDate: '2023-08-11',
        image: image as unknown as string,
    },
}