import Tag, { TagProps } from "./Tag"

interface TagListProps {
    tagData: TagProps[]
}

const TagList = ({tagData, ...props }: TagListProps) => {
    return (
        <ul className="flex gap-3 flex-wrap">
            {tagData.map((tag, index) => (
                <li key={index}>
                    <Tag {...tag} />
                </li>
            ))}
        </ul>
    )
}

export default TagList
