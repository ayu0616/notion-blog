import ImageBase from '@/components/common/ImageBase/ImageBase'

interface ImageProps {
    src: string
    alt: string
}

const Image = ({ ...props }: ImageProps) => {
    return (
        <ImageBase {...props} className='rounded-md drop-shadow-md'></ImageBase>
    )
}

export default Image
