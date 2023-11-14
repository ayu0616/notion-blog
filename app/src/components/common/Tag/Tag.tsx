import Link from 'next/link'

import { TagColor } from '@/type/page/page'

export interface TagProps {
    color: TagColor
    isLink?: boolean
    name: string
}

const Tag = ({ name, color, isLink = false, ...props }: TagProps) => {
    const colorClass = getColorClass(color)
    const decorationClass = isLink ? getDecorationClass(color) : ''
    const tagBody = (
        <span
            className={[
                'rounded-sm p-1',
                colorClass,
                decorationClass,
                isLink ? 'hover:underline' : '',
            ].join(' ')}
        >
            {name}
        </span>
    )
    return isLink ? (
        <Link className={[].join(' ')} href={`/tag/${name}`}>
            {tagBody}
        </Link>
    ) : (
        tagBody
    )
}

export default Tag

const getColorClass = (color: TagColor) => {
    switch (color) {
        case 'red':
            return 'bg-red-300/50 text-red-950'
        case 'blue':
            return 'bg-blue-300/50 text-blue-950'
        case 'green':
            return 'bg-green-400/50 text-green-950'
        case 'yellow':
            return 'bg-yellow-300/50 text-yellow-950'
        case 'purple':
            return 'bg-purple-300/50 text-purple-950'
        case 'pink':
            return 'bg-pink-300/50 text-pink-950'
        case 'gray':
            return 'bg-gray-300/50 text-gray-950'
        case 'brown':
            return 'bg-amber-600/50 text-amber-950'
        case 'orange':
            return 'bg-orange-300/50 text-orange-950'
        default:
            return 'bg-slate-300/50 text-slate-950'
    }
}

const getDecorationClass = (color: TagColor) => {
    switch (color) {
        case 'red':
            return 'decoration-red-950'
        case 'blue':
            return 'decoration-blue-950'
        case 'green':
            return 'decoration-green-950'
        case 'yellow':
            return 'decoration-yellow-950'
        case 'purple':
            return 'decoration-purple-950'
        case 'pink':
            return 'decoration-pink-950'
        case 'gray':
            return 'decoration-gray-950'
        case 'brown':
            return 'decoration-amber-950'
        case 'orange':
            return 'decoration-orange-950'
        default:
            return 'decoration-slate-950'
    }
}
