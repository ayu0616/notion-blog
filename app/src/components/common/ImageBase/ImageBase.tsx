import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage from 'next/image'
import './ImageBase.style.scss'

interface ImageProps {
    alt: string
    className?: string
    imgClassName?: string
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
    src: string | StaticImport
}

const ImageBase = ({
    className = '',
    imgClassName = '',
    objectFit = 'contain',
    ...props
}: ImageProps) => {
    const objectFitClass = setObjectFitClass(objectFit)
    return (
        <div className={`image-container relative ${className}`}>
            <NextImage
                {...props}
                // objectFit={objectFit}
                fill
                className={[
                    'rounded-[inherit]',
                    objectFitClass,
                    imgClassName,
                ].join(' ')}
                sizes='100%'
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
