import { ReactNode } from 'react'

interface TableHeadProps {
    children?: ReactNode
}

const TableHead = ({ children, ...props }: TableHeadProps) => {
    return <thead className='border-b'>{children}</thead>
}

export default TableHead
