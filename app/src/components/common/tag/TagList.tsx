import Tag, { TagProps } from './Tag'

interface TagListProps {
    tagData: TagProps[]
    className?: string
}

const TagList = ({ tagData, className = '', ...props }: TagListProps) => {
    return (
        <ul className={['flex flex-wrap gap-3', className].join(' ')}>
            {tagData.map((tag, index) => (
                <li key={index}>
                    <Tag {...tag} />
                </li>
            ))}
        </ul>
    )
}

export default TagList
