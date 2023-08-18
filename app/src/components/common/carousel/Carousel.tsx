import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Image from '../ImageBase'
import './Carousel.style.scss'

interface CarouselProps {
    srcList: string[]
}

const Carousel = ({ srcList, ...props }: CarouselProps) => {
    return (
        <div className='relative'>
            {/* 進む・戻るボタン */}
            <button className='absolute left-0 top-0 z-10 h-full text-white/50 hover:text-white/75 hover:bg-black/50 bg-black/25 flex justify-center items-center text-2xl px-2 md:px-4'>
                <FaAngleLeft></FaAngleLeft>
            </button>
            <button className='absolute right-0 top-0 z-10 h-full text-white/50 hover:text-white/75 hover:bg-black/50 bg-black/25 flex justify-center items-center text-2xl px-2 md:px-4'>
                <FaAngleRight></FaAngleRight>
            </button>

            {/* 画像 */}
            <div className='carousel-container flex aspect-video w-full snap-x snap-mandatory overflow-x-scroll'>
                {srcList.map((src, index) => {
                    return (
                        <Image
                            key={index}
                            src={src}
                            alt={`${src} in carousel`}
                            className='aspect-video h-full snap-center'
                            objectFit='cover'
                        ></Image>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel
