import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import Card from '../components/common/Card'
import Modal from '../components/common/Modal'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Modal',
    component: Modal,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Hello Modal',
        show: true,
        setShow: () => {},
    },
    render() {
        const [show, setShow] = useState(true)
        return (
            <>
                <div>{'hoge '.repeat(10000)}</div>
                <meta.component show={show} setShow={setShow}>
                    <Card
                        title='Modal'
                        description={'this is modal '.repeat(40)}
                    ></Card>
                </meta.component>
            </>
        )
    },
}
