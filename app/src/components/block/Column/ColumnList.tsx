import { ReactNode } from 'react'

interface ColumnListProps {
    children: ReactNode
}

const ColumnList = ({ ...props }: ColumnListProps) => {
    return (
        <div {...props} className='gap-4 space-y-8 md:flex md:space-y-0'></div>
    )
}

export default ColumnList
