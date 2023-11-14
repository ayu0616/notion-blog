import { useId } from 'react'

import { Color } from '@/type/page/color'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingProps {
    children?: React.ReactNode
    level?: HeadingLevel
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

const HeadingTag = ({
    level = 1,
    ...props
}: { level: HeadingLevel } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
>) => {
    switch (level) {
        case 1:
            return <h1 {...props} />
        case 2:
            return <h2 {...props} />
        case 3:
            return <h3 {...props} />
        case 4:
            return <h4 {...props} />
        case 5:
            return <h5 {...props} />
        case 6:
            return <h6 {...props} />
        default:
            return <h1 {...props} />
    }
}

const Heading = ({
    level = 1,
    color = 'default',
    className = '',
    ...props
}: HeadingProps) => {
    const colorClass = colorToClass(color)
    const id = useId()
    return (
        <HeadingTag
            {...props}
            className={[
                'border-l-4 border-orange-600 pl-4',
                level >= 3 ? 'py-1' : 'py-2',
                colorClass,
                className,
            ].join(' ')}
            id={id}
            level={level}
        ></HeadingTag>
    )
}

export default Heading
