import { ReactNode } from 'react'

interface ColumnProps {
    children: ReactNode
}

const Column = ({ ...props }: ColumnProps) => {
    return <div {...props}></div>
}

export default Column
