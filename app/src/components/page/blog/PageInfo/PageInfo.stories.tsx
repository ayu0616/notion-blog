import pageData from '@/../public/data/pages/test/data.json'
import { Page as PageData } from '@/type/page/page'

import PageInfo from './PageInfo'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},

    component: PageInfo,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof PageInfo>

export default meta
type Story = StoryObj<typeof meta>

const { title, tags, publishDate, lastEditedTime, image } = pageData as PageData

export const Default: Story = {
    args: {
        image: image ?? '',
        lastEditedTime,
        publishDate: publishDate ?? new Date().toISOString(),
        tags,
        title,
    },
}
