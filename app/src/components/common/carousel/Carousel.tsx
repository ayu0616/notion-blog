import { Tag as TagType } from '@/type/page/page'
import Link from 'next/link'
import { useCallback, useEffect, useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import dateToStr from '../../../util/dateToStr'
import Image from '../ImageBase'
import TagList from '../tag/TagList'
import './Carousel.style.scss'

interface CarouselProps {
    data: {
        image: string
        publishDate: string
        title: string
        tags: TagType[]
        slug: string
    }[]
}

const Carousel = ({ data, ...props }: CarouselProps) => {
    const container = useRef<HTMLDivElement>(null)

    const intervalRef = useRef<NodeJS.Timer | null>(null)

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

    const startInterval = useCallback(() => {
        intervalRef.current = setInterval(() => {
            goNext()
        }, 7500)
    }, [])

    const stopInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }

    useEffect(() => {
        startInterval()
        return () => stopInterval()
    }, [startInterval])

    return (
        <div className='relative'>
            {/* 進む・戻るボタン */}
            <button
                className='absolute left-0 top-0 z-10 flex h-full items-center justify-center px-2 text-2xl text-white/50 hover:text-white/75 md:px-4'
                onClick={() => {
                    stopInterval()
                    startInterval()
                    goPrev()
                }}
            >
                <FaAngleLeft></FaAngleLeft>
            </button>
            <button
                className='absolute right-0 top-0 z-10 flex h-full items-center justify-center px-2 text-2xl text-white/50 hover:text-white/75 md:px-4'
                onClick={() => {
                    stopInterval()
                    startInterval()
                    goNext()
                }}
            >
                <FaAngleRight></FaAngleRight>
            </button>

            {/* 画像 */}
            <div
                className='carousel-container flex aspect-video w-full snap-x snap-mandatory overflow-x-scroll'
                ref={container}
                onScroll={() => {
                    stopInterval()
                    startInterval()
                }}
            >
                {data.map((d, index) => {
                    return (
                        <Link
                            href={`/blog/${d.slug}`}
                            key={index}
                            className='relative'
                        >
                            <Image
                                src={d.image}
                                alt={`image of ${d.title}`}
                                className='aspect-video h-full snap-center'
                                objectFit='cover'
                            ></Image>
                            <div className='absolute bottom-0 flex w-full flex-col gap-1 bg-black/25 p-3 text-sm text-white/75 md:px-4'>
                                <p>{d.title}</p>
                                <p className='text-xs'>
                                    {dateToStr(d.publishDate)}
                                </p>
                                <TagList tagData={d.tags} gap={1}></TagList>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel
