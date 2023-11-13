import pageData from '@/../public/data/pages.json'
import { Page } from '@/type/page/page'

import BlogPages from './BlogPages'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    component: BlogPages,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof BlogPages>

export default meta
type Story = StoryObj<typeof meta>
;(pageData as Page[]).sort((a, b) => {
    const dateA = new Date(a.publishDate ?? 0)
    const dateB = new Date(b.publishDate ?? 0)
    return dateB.getTime() - dateA.getTime()
})

export const Default: Story = {
    args: { pageData: pageData as Page[] },
    render: (args) => (
        <div className='space-y-4 bg-orange-50 p-2'>
            <BlogPages {...args} />
        </div>
    ),
}
