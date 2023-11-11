import { ReactNode } from 'react'

interface ColumnListProps {
    children: ReactNode
}

const ColumnList = ({ ...props }: ColumnListProps) => {
    return <div {...props} className='flex gap-4'></div>
}

export default ColumnList
