import { useEffect, useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Image from '../ImageBase'
import './Carousel.style.scss'

interface CarouselProps {
    srcList: string[]
}

const Carousel = ({ srcList, ...props }: CarouselProps) => {
    const container = useRef<HTMLDivElement>(null)

    const goNext = () => {
        if (!container.current) {
            return
        }
        const containerWidth = container.current.clientWidth
        const maxScrollLeft = container.current.scrollWidth - containerWidth
        const nextScrollLeft = container.current.scrollLeft + containerWidth
        if (nextScrollLeft > maxScrollLeft) {
            container.current.scrollTo({
                left: 0,
                behavior: 'smooth',
            })
        } else {
            container.current.scrollBy({
                left: containerWidth,
                behavior: 'smooth',
            })
        }
    }

    const goPrev = () => {
        if (!container.current) {
            return
        }
        const containerWidth = container.current.clientWidth
        const maxScrollLeft = container.current.scrollWidth - containerWidth
        const nextScrollLeft = container.current.scrollLeft - containerWidth
        if (nextScrollLeft < 0) {
            container.current.scrollTo({
                left: maxScrollLeft,
                behavior: 'smooth',
            })
        } else {
            container.current.scrollBy({
                left: -containerWidth,
                behavior: 'smooth',
            })
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            goNext()
        }, 7500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='relative'>
            {/* 進む・戻るボタン */}
            <button
                className='absolute left-0 top-0 z-10 flex h-full items-center justify-center bg-black/25 px-2 text-2xl text-white/50 hover:bg-black/50 hover:text-white/75 md:px-4'
                onClick={goPrev}
            >
                <FaAngleLeft></FaAngleLeft>
            </button>
            <button
                className='absolute right-0 top-0 z-10 flex h-full items-center justify-center bg-black/25 px-2 text-2xl text-white/50 hover:bg-black/50 hover:text-white/75 md:px-4'
                onClick={goNext}
            >
                <FaAngleRight></FaAngleRight>
            </button>

            {/* 画像 */}
            <div
                className='carousel-container flex aspect-video w-full snap-x snap-mandatory overflow-x-scroll'
                ref={container}
            >
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
