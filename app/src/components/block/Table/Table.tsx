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
    return (
        <div className='overflow-x-auto'>
            <table className='whitespace-nowrap border'>{children}</table>
        </div>
    )
}

export default Table
