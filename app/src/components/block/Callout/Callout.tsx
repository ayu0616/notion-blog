import { Color } from '@/type/page/color'

interface CalloutProps {
    children?: React.ReactNode
    color?: Color
    content?: React.ReactNode
    icon?: string
}

function colorToClass(color: Color) {
    switch (color) {
        case 'red_background':
            return 'bg-red-200/50'
        case 'blue_background':
            return 'bg-blue-200/50'
        case 'green_background':
            return 'bg-green-200/50'
        case 'yellow_background':
            return 'bg-yellow-200/50'
        case 'purple_background':
            return 'bg-purple-200/50'
        case 'pink_background':
            return 'bg-pink-200/50'
        case 'gray_background':
            return 'bg-gray-200/50'
        case 'brown_background':
            return 'bg-amber-500/50'
        case 'orange_background':
            return 'bg-orange-200/50'
        case 'red':
            return 'bg-white text-red-700'
        case 'blue':
            return 'bg-white text-blue-700'
        case 'green':
            return 'bg-white text-green-700'
        case 'yellow':
            return 'bg-white text-yellow-700'
        case 'purple':
            return 'bg-white text-purple-700'
        case 'pink':
            return 'bg-white text-pink-700'
        case 'gray':
            return 'bg-white text-gray-700'
        case 'brown':
            return 'bg-white text-amber-800'
        case 'orange':
            return 'bg-white text-orange-700'
        default:
            return 'bg-white'
    }
}

const Callout = ({
    icon,
    content,
    color = 'default',
    children,
    ...props
}: CalloutProps) => {
    const colorClass = colorToClass(color)
    return (
        <div
            className={[
                'flex w-full gap-4 rounded border p-4',
                colorClass,
            ].join(' ')}
        >
            <div className=''>{icon}</div>
            <div className='space-y-4'>
                <div className=''>{content}</div>
                {children}
            </div>
        </div>
    )
}

export default Callout
