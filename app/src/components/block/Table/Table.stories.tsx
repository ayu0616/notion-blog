import type { Meta, StoryObj } from '@storybook/react'

import { Table, TableBody, TableCell, TableHead, TableRow } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},

    component: Table,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const SampleTable = () => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell isHead>head</TableCell>
                <TableCell isHead>head head</TableCell>
                <TableCell isHead>head head head</TableCell>
                <TableCell isHead>head head head head</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell isHead>head</TableCell>
                <TableCell>body</TableCell>
                <TableCell>body</TableCell>
                <TableCell>body</TableCell>
            </TableRow>
            <TableRow>
                <TableCell isHead>head head head</TableCell>
                <TableCell>body</TableCell>
                <TableCell>body</TableCell>
                <TableCell>body</TableCell>
            </TableRow>
            <TableRow>
                <TableCell isHead>head</TableCell>
                <TableCell>body</TableCell>
                <TableCell>body</TableCell>
                <TableCell>body</TableCell>
            </TableRow>
        </TableBody>
    </Table>
)

export const Default: Story = {
    args: {},
    render: (args) => <SampleTable />,
}

export const OverflowScroll: Story = {
    args: {},
    render: (args) => (
        <div className='w-[500px] bg-white'>
            <SampleTable />
        </div>
    ),
}
