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
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Ja-fukushima-ohuchijuku-7.jpg',
    },
    render() {
        return (
            <meta.component imgSrc='https://upload.wikimedia.org/wikipedia/commons/9/92/Ja-fukushima-ohuchijuku-7.jpg'>
                <h3>hogehoge</h3>
                <p>fugafuga fugafuga</p>
            </meta.component>
        )
    }
}
