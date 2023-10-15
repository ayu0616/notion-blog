import { ReactNode } from 'react'

interface TableProps {
    children?: ReactNode
}

const Table = ({ children, ...props }: TableProps) => {
    return <table className='max-w-full border'>{children}</table>
}

export default Table
