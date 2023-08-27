import NextImage from 'next/image'
import './ImageBase.style.scss'

interface ImageProps {
    src: string
    alt: string
    className?: string
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

const ImageBase = ({
    className,
    objectFit = 'contain',
    ...props
}: ImageProps) => {
    const objectFitClass = setObjectFitClass(objectFit)
    return (
        <div className={'image-container ' + className}>
            <NextImage
                {...props}
                layout='fill'
                // objectFit={objectFit}
                className={['rounded-[inherit]', objectFitClass].join(' ')}
            />
        </div>
    )
}

export default ImageBase

const setObjectFitClass = (
    objectFit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down',
) => {
    switch (objectFit) {
        case 'contain':
            return 'object-contain'
        case 'cover':
            return 'object-cover'
        case 'fill':
            return 'object-fill'
        case 'none':
            return 'object-none'
        case 'scale-down':
            return 'object-scale-down'
        default:
            return 'object-contain'
    }
}
