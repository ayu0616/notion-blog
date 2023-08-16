import type { Meta, StoryObj } from '@storybook/react'

import BookMark from '../components/block/BookMark'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/BookMark',
    component: BookMark,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof BookMark>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        href: 'https://www.google.com',
    },
}