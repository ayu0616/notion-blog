import { TagColor } from '@/type/page/page'
import Link from 'next/link'

export interface TagProps {
    color: TagColor
    name: string
    isLink?: boolean
}

const Tag = ({ name, color, isLink = false, ...props }: TagProps) => {
    const bg = (() => {
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
    })()
    if (isLink) {
        return (
            <Link href={`/tag/${name}`} className=''>
                <span
                    className={['rounded-sm p-1 hover:underline', bg].join(' ')}
                >
                    {name}
                </span>
            </Link>
        )
    } else {
        return <span className={['rounded-sm p-1', bg].join(' ')}>{name}</span>
    }
}

export default Tag
