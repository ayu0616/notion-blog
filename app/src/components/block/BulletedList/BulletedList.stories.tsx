import BulletedList from './BulletedList'
import BulletedListItem from './BulletedListItem'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},

    component: BulletedList,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof BulletedList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    render() {
        return (
            <BulletedList>
                <BulletedListItem>1st item</BulletedListItem>
                <BulletedListItem>
                    2nd item
                    <BulletedList>
                        <BulletedListItem>child 1</BulletedListItem>
                        <BulletedListItem>
                            child 2
                            <BulletedList>
                                <BulletedListItem>
                                    grand child 1
                                </BulletedListItem>
                                <BulletedListItem>
                                    grand child 2
                                    <BulletedList>
                                        <BulletedListItem>
                                            great grand child 1
                                        </BulletedListItem>
                                        <BulletedListItem>
                                            great grand child 2
                                            <BulletedList>
                                                <BulletedListItem>
                                                    great grand child 1
                                                </BulletedListItem>
                                                <BulletedListItem>
                                                    great grand child 2
                                                </BulletedListItem>
                                            </BulletedList>
                                        </BulletedListItem>
                                    </BulletedList>
                                </BulletedListItem>
                            </BulletedList>
                        </BulletedListItem>
                        <BulletedListItem>child 3</BulletedListItem>
                    </BulletedList>
                </BulletedListItem>
                <BulletedListItem>3rd item</BulletedListItem>
                <BulletedListItem>4th item</BulletedListItem>
            </BulletedList>
        )
    },
}
