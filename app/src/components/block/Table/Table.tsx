import { ReactNode } from 'react'

interface TableProps {
    children?: ReactNode
    // hasRowHeader?: boolean
    // hasColHeader?: boolean
}

const Table = ({
    children,
    // hasRowHeader = false,
    // hasColHeader = false,
    ...props
}: TableProps) => {
    return <table className='max-w-full border'>{children}</table>
}

export default Table
