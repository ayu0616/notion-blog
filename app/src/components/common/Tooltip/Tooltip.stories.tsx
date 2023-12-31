import { useEffect, useRef, useState } from 'react'

import Tooltip from './Tooltip'
import { Button } from '../Button/Button'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},

    component: Tooltip,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'This is a Tooltip',
    },
    render: (args) => {
        const buttonRef = useRef<HTMLButtonElement>(null)
        const [buttonElem, setButtonElem] = useState<HTMLButtonElement | null>(
            null,
        )
        const [show, setShow] = useState(false)
        useEffect(() => {
            setButtonElem(buttonRef.current)
        }, [])
        const toggleShow = () => {
            setShow((prev) => !prev)
        }
        return (
            <>
                <Button ref={buttonRef} className='' onClick={toggleShow}>
                    これはボタンです
                </Button>
                <Tooltip {...args} elem={buttonElem} isShow={show} />
            </>
        )
    },
}
