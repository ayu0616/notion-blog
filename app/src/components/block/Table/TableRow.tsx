import { ReactNode } from 'react'

interface TableRowProps {
    children?: ReactNode
}

const TableRow = ({ children, ...props }: TableRowProps) => {
    return <tr className='border-b last:border-b-0'>{children}</tr>
}

export default TableRow
