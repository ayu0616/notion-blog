import { Color } from '@/type/page/color'

interface HeadingProps {
    children?: React.ReactNode
    level?: 1 | 2 | 3 | 4 | 5 | 6
    color?: Color
    className?: string
}

function colorToClass(color: Color) {
    switch (color) {
        case 'red_background':
            return 'bg-red-300/50'
        case 'blue_background':
            return 'bg-blue-300/50'
        case 'green_background':
            return 'bg-green-300/50'
        case 'yellow_background':
            return 'bg-yellow-300/50'
        case 'purple_background':
            return 'bg-purple-300/50'
        case 'pink_background':
            return 'bg-pink-300/50'
        case 'gray_background':
            return 'bg-gray-300/50'
        case 'brown_background':
            return 'bg-amber-700/50'
        case 'orange_background':
            return 'bg-orange-300/50'
        case 'red':
            return 'text-red-700'
        case 'blue':
            return 'text-blue-700'
        case 'green':
            return 'text-green-700'
        case 'yellow':
            return 'text-yellow-700'
        case 'purple':
            return 'text-purple-700'
        case 'pink':
            return 'text-pink-700'
        case 'gray':
            return 'text-gray-700'
        case 'brown':
            return 'text-amber-800'
        case 'orange':
            return 'text-orange-700'
        default:
            return ''
    }
}

const Heading = ({
    level = 1,
    color = 'default',
    className = '',
    ...props
}: HeadingProps) => {
    const colorClass = colorToClass(color)
    const cn = [colorClass, className].join(' ')
    switch (level) {
        case 1:
            return <h1 {...props} className={cn}></h1>
        case 2:
            return <h2 {...props} className={cn}></h2>
        case 3:
            return <h3 {...props} className={cn}></h3>
        case 4:
            return <h4 {...props} className={cn}></h4>
        case 5:
            return <h5 {...props} className={cn}></h5>
        case 6:
            return <h6 {...props} className={cn}></h6>
        default:
            return <h1 {...props} className={cn}></h1>
    }
}

export default Heading
