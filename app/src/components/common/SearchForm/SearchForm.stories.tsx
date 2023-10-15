import SearchForm from './SearchForm'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    component: SearchForm,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof SearchForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: '検索',
        action: 'https://www.google.com/search',
        name: 'q',
    },
}

export const InBar: Story = {
    args: {
        placeholder: '検索',
        action: 'https://www.google.com/search',
        name: 'q',
    },
    render: (args) => (
        <div className='bg-gray-200 p-4'>
            <SearchForm {...args} />
        </div>
    ),
}
