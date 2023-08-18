import Tag, { TagProps } from './Tag'

interface TagListProps {
    tagData: TagProps[]
    className?: string
    gap?: number
    isLink?: boolean
}

const TagList = ({
    tagData,
    className = '',
    gap = 1 | 2 | 3 | 4,
    isLink = false,
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
                    <Tag {...tag} isLink={isLink} />
                </li>
            ))}
        </ul>
    )
}

export default TagList
