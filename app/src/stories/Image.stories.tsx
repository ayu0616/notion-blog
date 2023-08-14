import type { Meta, StoryObj } from '@storybook/react'

import Image from './Image'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Image',
    component: Image,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Ja-fukushima-ohuchijuku-7.jpg',
        alt: 'Image alt text',
    },
}
