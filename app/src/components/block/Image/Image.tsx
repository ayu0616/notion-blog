import ImageBase from '@/components/common/ImageBase/ImageBase'

interface ImageProps {
    alt: string
    src: string
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
