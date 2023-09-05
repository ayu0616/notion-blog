import { RichText as RichTextType } from '@/type/page/block/richText'
import { Color } from '@/type/page/color'

function colorToClass(color: Color) {
    switch (color) {
        case 'red_background':
            return 'bg-red-300/50'
        case 'blue_background':
            return 'bg-blue-300/50'
        case 'green_background':
            return 'bg-green-400/50'
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

interface RichTextProps extends RichTextType {}

const RichText = ({
    text,
    href,
    annotations,
    type,
    ...props
}: RichTextProps) => {
    const annotationClass = [
        annotations.bold ? 'font-bold' : '',
        annotations.italic ? 'italic' : '',
        annotations.strikethrough ? 'line-through' : '',
        annotations.underline ? 'underline' : '',
        colorToClass(annotations.color),
    ]
    if (href) {
        return (
            <a
                className={[
                    'text-blue-600 hover:text-blue-700 hover:underline active:text-blue-800',
                    ...annotationClass,
                ].join(' ')}
                href={href}
                target='_blank'
                rel='noreferrer'
            >
                {text}
            </a>
        )
    } else if (annotations.code) {
        return (
            <code
                className={[
                    'rounded-sm bg-gray-200 px-1 text-red-600',
                    ...annotationClass,
                ].join(' ')}
            >
                {text}
            </code>
        )
    } else {
        return <span className={annotationClass.join(' ')}>{text}</span>
    }
}

export default RichText
