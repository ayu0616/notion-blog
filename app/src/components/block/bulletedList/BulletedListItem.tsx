interface BulletedListItemProps {
    children?: React.ReactNode
}

const BulletedListItem = ({ ...props }: BulletedListItemProps) => {
    return <li {...props}></li>
}

export default BulletedListItem
