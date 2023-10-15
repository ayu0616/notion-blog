import { ReactNode } from 'react'

interface TdThProps {
    children?: ReactNode
    className?: string
}

interface TableCellProps extends TdThProps {
    isHead?: boolean
}

const Td = ({ ...props }: TdThProps) => {
    return <td {...props}></td>
}

const Th = ({ ...props }: TdThProps) => {
    return <th {...props}></th>
}

const TableCell = ({ isHead = false, className, ...props }: TableCellProps) => {
    const cn = 'border-r last:border-r-0 px-4 py-3'
    if (isHead) {
        return <Th className={[cn, className].join(' ')} {...props} />
    } else {
        return <Td className={[cn, className].join(' ')} {...props} />
    }
}

export default TableCell
