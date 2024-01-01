import Callout from './Callout'
import BulletedList from '../BulletedList/BulletedList'
import BulletedListItem from '../BulletedList/BulletedListItem'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},

    component: Callout,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Callout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: (
            <BulletedList>
                <BulletedListItem>hoge</BulletedListItem>
                <BulletedListItem>
                    fuga
                    <BulletedList>
                        <BulletedListItem>fuga 1</BulletedListItem>
                        <BulletedListItem>fuga 2</BulletedListItem>
                    </BulletedList>
                </BulletedListItem>
            </BulletedList>
        ),
        content: 'Hello World',
        icon: '👋',
    },
}
