import TagList from './TagList'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},

    component: TagList,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof TagList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        tagData: [
            {
                color: 'red',
                name: 'Tag 1',
            },
            {
                color: 'blue',
                name: 'Tag 2',
            },
            {
                color: 'green',
                name: 'Tag 3',
            },
        ],
    },
}
