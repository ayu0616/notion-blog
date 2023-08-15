import { TagColor } from '@/type/page/page'

export interface TagProps {
    color: TagColor
    name: string
}

const Tag = ({ name, color, ...props }: TagProps) => {
    const bg = (() => {
        switch (color) {
            case 'red':
                return 'bg-red-300/50'
            case 'blue':
                return 'bg-blue-300/50'
            case 'green':
                return 'bg-green-400/50'
            case 'yellow':
                return 'bg-yellow-300/50'
            case 'purple':
                return 'bg-purple-300/50'
            case 'pink':
                return 'bg-pink-300/50'
            case 'gray':
                return 'bg-gray-300/50'
            case 'brown':
                return 'bg-amber-700/50'
            case 'orange':
                return 'bg-orange-300/50'
            default:
                return 'bg-slate-300/50'
        }
    })()
    return <span className={['p-1 rounded-sm', bg].join(' ')}>{name}</span>
}

export default Tag
