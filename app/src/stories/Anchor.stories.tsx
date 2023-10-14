import Anchor from '../components/common/Anchor'

import type { Meta, StoryObj } from '@storybook/react'


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Anchor',
    component: Anchor,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Anchor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Anchor',
        href: 'https://www.google.com',
        isInnerLink: false,
    },
}
