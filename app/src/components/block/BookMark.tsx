'use client'

import { useEffect, useState } from 'react'
import Image from '../common/ImageBase'

interface BookMarkProps {
    href: string
}

const BookMark = ({ href, ...props }: BookMarkProps) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [iconUrl, setIconUrl] = useState('')

    useEffect(() => {
        const getTitle = async () => {
            const resData = await fetch('/api/page-data?url=' + href).then(
                (res) => res.json(),
            )
            const { title, description, iconUrl } = resData
            setTitle(title)
            setDescription(description)
            setIconUrl(iconUrl)
        }
        getTitle()
    }, [href])

    return (
        <div className='rounded-md bg-white drop-shadow-lg hover:drop-shadow-xl active:drop-shadow-md'>
            <a href={href} target='_blank' rel='noopener noreferrer'>
                <div className='space-y-1 p-3'>
                    <h6>{title}</h6>
                    <p className='text-xs leading-3 md:text-sm'>
                        {description}
                    </p>
                    <p className='flex items-center justify-end text-right text-xs text-gray-500 md:text-sm'>
                        <Image
                            src={iconUrl}
                            alt={`icon of ${href}`}
                            className='mr-1 inline-block h-[12px] w-[12px] md:h-4 md:w-4 md:mr-2'
                        />
                        {href}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default BookMark
