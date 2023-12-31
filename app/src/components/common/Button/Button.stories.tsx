import { Button } from './Button'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        mode: {
            control: 'select',
            options: ['primary', 'secondary', 'orange'],
        },
    },

    component: Button,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'Button',
        mode: 'primary',
    },
}
export const Secondary: Story = {
    args: {
        children: 'Button',
        mode: 'secondary',
    },
}
export const Orange: Story = {
    args: {
        children: 'Button',
        mode: 'orange',
    },
}
