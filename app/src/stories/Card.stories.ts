import type { Meta, StoryObj } from '@storybook/react'

import Card from './Card'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Card',
    component: Card,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Hello World',
        description: 'This is a description',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmK2rV84-LLtxQ_Xb82S5GwI8ah_38qCpHQ&usqp=CAU',
    },
}
