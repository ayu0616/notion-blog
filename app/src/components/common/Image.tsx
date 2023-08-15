import Image from 'next/image'
import './Image.style.scss'

interface ImageProps {
    src: string
    alt: string
    className?: string
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
}

const MyImage = ({
    className,
    objectFit = 'contain',
    ...props
}: ImageProps) => {
    return (
        <div className={'image-container ' + className}>
            <Image {...props} layout='fill' objectFit={objectFit} className='rounded-[inherit]' />
        </div>
    )
}

export default MyImage
