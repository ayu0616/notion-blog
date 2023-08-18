import Tag, { TagProps } from './Tag'

interface TagListProps {
    tagData: TagProps[]
    className?: string
    gap?: number
}

const TagList = ({
    tagData,
    className = '',
    gap = 1 | 2 | 3 | 4,
    ...props
}: TagListProps) => {
    const gapClass =
        gap === 1
            ? 'gap-1'
            : gap === 2
            ? 'gap-2'
            : gap === 3
            ? 'gap-3'
            : gap === 4
            ? 'gap-4'
            : 'gap-3'
    return (
        <ul className={['flex flex-wrap', gapClass, className].join(' ')}>
            {tagData.map((tag, index) => (
                <li key={index}>
                    <Tag {...tag} />
                </li>
            ))}
        </ul>
    )
}

export default TagList
