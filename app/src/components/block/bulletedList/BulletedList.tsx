import './BulletedList.style.scss'

interface BulletedListProps {
    children?: React.ReactNode
}

const BulletedList = ({ ...props }: BulletedListProps) => {
    return <ul {...props}></ul>
}

export default BulletedList
