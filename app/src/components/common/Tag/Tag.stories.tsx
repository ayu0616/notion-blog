import Tag from './Tag'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    component: Tag,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        name: 'タグ',
        color: 'blue',
    },
}

export const WithLink: Story = {
    args: { name: 'タグ', color: 'blue' },
    render() {
        return (
            <a className='hover:underline' href='#'>
                <meta.component color='blue' name='タグ'></meta.component>
            </a>
        )
    },
}
