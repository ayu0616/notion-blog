import Image from '../ImageBase'
import './Carousel.style.scss'

interface CarouselProps {
    srcList: string[]
}

const Carousel = ({ srcList, ...props }: CarouselProps) => {
    return (
        <div className='carousel-container flex w-full overflow-x-scroll aspect-video snap-x snap-mandatory'>
            {srcList.map((src, index) => {
                return (
                    <Image
                        key={index}
                        src={src}
                        alt={`${src} in carousel`}
                        className='h-full aspect-video snap-center'
                        objectFit='cover'
                    ></Image>
                )
            })}
        </div>
    )
}

export default Carousel
