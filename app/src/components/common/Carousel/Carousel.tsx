'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { Tag as TagType } from '@/type/page/page'

import dateToStr from '../../../util/dateToStr'
import ImageBase from '../ImageBase/ImageBase'
import TagList from '../Tag/TagList'
import './Carousel.style.scss'

interface CarouselProps {
    data: {
        image: string
        publishDate: string
        slug: string
        tags: TagType[]
        title: string
    }[]
}

const Carousel = ({ data, ...props }: CarouselProps) => {
    const container = useRef<HTMLDivElement>(null)

    const intervalRef = useRef<number | null>(null)

    const goNext = () => {
        if (!container.current) {
            return
        }
        const containerWidth = container.current.clientWidth
        const maxScrollLeft = container.current.scrollWidth - containerWidth
        const nextScrollLeft = container.current.scrollLeft + containerWidth
        if (nextScrollLeft > maxScrollLeft) {
            container.current.scrollTo({
                behavior: 'smooth',
                left: 0,
            })
        } else {
            container.current.scrollBy({
                behavior: 'smooth',
                left: containerWidth,
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
                behavior: 'smooth',
                left: maxScrollLeft,
            })
        } else {
            container.current.scrollBy({
                behavior: 'smooth',
                left: -containerWidth,
            })
        }
    }

    const startInterval = useCallback(() => {
        intervalRef.current = window.setInterval(() => {
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
        <div className='relative bg-gray-50'>
            {/* 進む・戻るボタン */}
            <button
                className='absolute left-0 top-0 z-10 flex h-full items-center justify-center px-2 text-3xl text-white md:px-4 md:text-4xl'
                title='前へ'
                onClick={() => {
                    stopInterval()
                    startInterval()
                    goPrev()
                }}
            >
                <span className='drop-shadow-lg'>
                    <FaAngleLeft></FaAngleLeft>
                </span>
            </button>
            <button
                className='absolute right-0 top-0 z-10 flex h-full items-center justify-center px-2 text-3xl text-white md:px-4 md:text-4xl'
                title='次へ'
                onClick={() => {
                    stopInterval()
                    startInterval()
                    goNext()
                }}
            >
                <span className='drop-shadow-lg'>
                    <FaAngleRight></FaAngleRight>
                </span>
            </button>

            {/* 画像 */}
            <div
                ref={container}
                className='carousel-container flex aspect-video w-full snap-x snap-mandatory overflow-x-scroll'
                onScroll={() => {
                    stopInterval()
                    startInterval()
                }}
            >
                {data.map((d, index) => {
                    return (
                        <Link
                            key={index}
                            className='relative min-w-full'
                            href={`/blog/${d.slug}`}
                        >
                            <ImageBase
                                alt={`image of ${d.title}`}
                                className='aspect-video h-full snap-center'
                                objectFit='cover'
                                src={d.image}
                            ></ImageBase>
                            <div className='absolute bottom-0 flex w-full flex-col gap-2 bg-black/25 p-3 text-sm text-white md:px-4'>
                                <p>{d.title}</p>
                                <div className='flex items-end justify-between gap-4'>
                                    <TagList
                                        className='flex-1'
                                        gap={1}
                                        tagData={d.tags}
                                    ></TagList>
                                    <p className='w-fit text-right text-xs'>
                                        {dateToStr(d.publishDate)}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel
