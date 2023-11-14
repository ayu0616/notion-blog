import { useState } from 'react'

import Modal from './Modal'
import Card from '../Card/Card'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},

    component: Modal,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Hello Modal',
        setShow: () => {},
        show: true,
    },
    render() {
        const [show, setShow] = useState(true)
        return (
            <>
                <div>{'hoge '.repeat(10000)}</div>
                <meta.component setShow={setShow} show={show}>
                    <Card></Card>
                </meta.component>
            </>
        )
    },
}
