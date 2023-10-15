import Table from './Table'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableHead from './TableHead'
import TableRow from './TableRow'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    component: Table,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    render: (args) => (
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
    ),
}
