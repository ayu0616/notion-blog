import './BulletedList.style.scss'

interface BulletedListProps {
    children?: React.ReactNode
}

const BulletedList = ({ ...props }: BulletedListProps) => {
    return <ul {...props} className='bulleted-list list-inside'></ul>
}

export default BulletedList
