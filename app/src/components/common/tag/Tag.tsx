import { TagColor } from '@/type/page/page'

export interface TagProps {
    color: TagColor
    name: string
}

const Tag = ({ name, color, ...props }: TagProps) => {
    const bg = (() => {
        switch (color) {
            case 'red':
                return 'bg-red-300/50 text-red-500'
            case 'blue':
                return 'bg-blue-300/50 text-blue-500'
            case 'green':
                return 'bg-green-400/50 text-green-500'
            case 'yellow':
                return 'bg-yellow-300/50 text-yellow-500'
            case 'purple':
                return 'bg-purple-300/50 text-purple-500'
            case 'pink':
                return 'bg-pink-300/50 text-pink-500'
            case 'gray':
                return 'bg-gray-300/50 text-gray-500'
            case 'brown':
                return 'bg-amber-700/50 text-amber-700'
            case 'orange':
                return 'bg-orange-300/50 text-orange-500'
            default:
                return 'bg-slate-300/50 text-slate-500'
        }
    })()
    return <span className={['rounded-sm p-1', bg].join(' ')}>{name}</span>
}

export default Tag
