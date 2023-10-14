import type { Meta, StoryObj } from '@storybook/react'

import TableOfContent from './TableOfContent'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/TableOfContent',
    component: TableOfContent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof TableOfContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    render: () => (
        <div className='w-[400px]'>
            <TableOfContent />
            <h3 className='heading-1' id='1'>
                hoge
            </h3>
            <h4 className='heading-2' id='2'>
                hoge fuga
            </h4>
            <h6 className='heading-3' id='3'>
                hoge fuga piyo
            </h6>
        </div>
    ),
}
