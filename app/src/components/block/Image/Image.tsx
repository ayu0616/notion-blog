import ImageBase from '@/components/common/ImageBase/ImageBase'

interface ImageProps {
    src: string
    alt: string
}

const Image = ({ ...props }: ImageProps) => {
    return (
        <ImageBase
            {...props}
            className='m-auto max-h-[50vh] w-fit rounded-md drop-shadow-md'
            imgClassName='max-h-[50vh]'
        ></ImageBase>
    )
}

export default Image
