import Embed from './Embed'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    component: Embed,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Embed>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        url: 'https://instagram.com/p/CpXuhUgPBeO/',
    },
    render: (args) => (
        <div className='h-[500px] w-[500px] bg-white p-4'>
            <Embed {...args} />
        </div>
    ),
}
