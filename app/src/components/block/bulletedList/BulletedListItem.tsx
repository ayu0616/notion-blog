interface BulletedListItemProps {
    children?: React.ReactNode
}

const BulletedListItem = ({ children, ...props }: BulletedListItemProps) => {
    return (
        <li className='flex'>
            <div>{children}</div>
        </li>
    )
}

export default BulletedListItem
