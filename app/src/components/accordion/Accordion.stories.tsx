import type { Meta, StoryObj } from '@storybook/react'

import Accordion from './Accordion'
import AccordionButton from './AccordionButton'
import AccordionContent from './AccordionContent'
import AccordionIcon from './AccordionIcon'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    component: Accordion,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    render: () => (
        <div className='w-[600px]'>
            <Accordion>
                <AccordionButton>
                    <div className='flex items-center justify-between bg-white hover:bg-inherit active:bg-inherit'>
                        <h3 className='flex-1'>見出し</h3>
                        <AccordionIcon />
                    </div>
                </AccordionButton>
                <AccordionContent>
                    <div className='bg-white'>
                        <p>
                            hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge
                            hoge hoge
                        </p>
                        <p>
                            hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge
                            hoge hoge
                        </p>
                        <p>
                            hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge
                            hoge hoge
                        </p>
                        <p>
                            hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge
                            hoge hoge
                        </p>
                        <p>
                            hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge
                            hoge hoge
                        </p>
                        <p>
                            hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge
                            hoge hoge
                        </p>
                    </div>
                </AccordionContent>
            </Accordion>
        </div>
    ),
}
