import type { Meta, StoryObj } from '@storybook/react'

import Equation from '../components/block/Equation'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Equation',
    component: Equation,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Equation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        math: 'x^2 + y^2 = z^2',
    },
}
