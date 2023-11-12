import NextImage from 'next/image'
import './ImageBase.style.scss'

interface ImageProps {
    src: string
    alt: string
    className?: string
    imgClassName?: string
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

const ImageBase = ({
    className = '',
    imgClassName = '',
    objectFit = 'contain',
    ...props
}: ImageProps) => {
    const objectFitClass = setObjectFitClass(objectFit)
    return (
        <div className={'image-container relative ' + className}>
            <NextImage
                {...props}
                // objectFit={objectFit}
                fill
                sizes='100%'
                className={[
                    'rounded-[inherit]',
                    objectFitClass,
                    imgClassName,
                ].join(' ')}
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
