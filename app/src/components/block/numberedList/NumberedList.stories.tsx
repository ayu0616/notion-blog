import type { Meta, StoryObj } from '@storybook/react'

import NumberedList from './NumberedList'
import NumberedListItem from './NumberedListItem'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/NumberedList',
    component: NumberedList,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof NumberedList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    render() {
        return (
            <NumberedList>
                <NumberedListItem>1st item</NumberedListItem>
                <NumberedListItem>
                    2nd item
                    <NumberedList>
                        <NumberedListItem>child 1</NumberedListItem>
                        <NumberedListItem>
                            child 2
                            <NumberedList>
                                <NumberedListItem>
                                    grand child 1
                                </NumberedListItem>
                                <NumberedListItem>
                                    grand child 2
                                    <NumberedList>
                                        <NumberedListItem>
                                            great grand child 1
                                        </NumberedListItem>
                                        <NumberedListItem>
                                            great grand child 2
                                            <NumberedList>
                                                <NumberedListItem>
                                                    great grand child 1
                                                </NumberedListItem>
                                                <NumberedListItem>
                                                    great grand child 2
                                                </NumberedListItem>
                                            </NumberedList>
                                        </NumberedListItem>
                                    </NumberedList>
                                </NumberedListItem>
                            </NumberedList>
                        </NumberedListItem>
                        <NumberedListItem>child 3</NumberedListItem>
                    </NumberedList>
                </NumberedListItem>
                <NumberedListItem>3rd item</NumberedListItem>
                <NumberedListItem>4th item</NumberedListItem>
            </NumberedList>
        )
    },
}
