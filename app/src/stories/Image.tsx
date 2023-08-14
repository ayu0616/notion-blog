import Image from 'next/image'
import './Image.style.scss'

interface ImageProps {
    src: string
    alt: string
    className?: string
}

const MyImage = ({ className, ...props }: ImageProps) => {
    return (
        <div className={'image-container ' + className}>
            <Image {...props} className={className} layout='fill' />
        </div>
    )
}

export default MyImage
