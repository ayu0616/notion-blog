import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionButton, AccordionContent, AccordionIcon } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},

    component: Accordion,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const Content = () => (
    <div>
        <p>hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge</p>
        <p>hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge</p>
        <p>hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge</p>
        <p>hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge</p>
        <p>hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge</p>
        <p>hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge</p>
    </div>
)

export const DefaultClose: Story = {
    args: {},
    render: () => (
        <div className='w-[600px]'>
            <Accordion>
                <AccordionButton>
                    <div className='flex items-center justify-between'>
                        <h3 className='flex-1'>見出し</h3>
                        <AccordionIcon />
                    </div>
                </AccordionButton>
                <AccordionContent>
                    <Content />
                </AccordionContent>
            </Accordion>
        </div>
    ),
}

export const DefaultOpen: Story = {
    args: {},
    render: () => (
        <div className='w-[600px]'>
            <Accordion>
                <AccordionButton open={true}>
                    <div className='flex items-center justify-between'>
                        <h3 className='flex-1'>見出し</h3>
                        <AccordionIcon />
                    </div>
                </AccordionButton>
                <AccordionContent>
                    <Content />
                </AccordionContent>
            </Accordion>
        </div>
    ),
}

export const Unstyled: Story = {
    args: {
        variant: 'unstyled',
    },
    render: (args) => (
        <div className='w-[600px]'>
            <Accordion {...args}>
                <AccordionButton>
                    <div className='flex items-center justify-between'>
                        <h3 className='flex-1'>見出し</h3>
                        <AccordionIcon />
                    </div>
                </AccordionButton>
                <AccordionContent>
                    <Content />
                </AccordionContent>
            </Accordion>
        </div>
    ),
}
