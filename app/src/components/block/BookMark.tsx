'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

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
                <div className='p-3'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p className='text-right text-sm text-gray-500'>
                        <Image
                            src={iconUrl}
                            alt={`icon of ${href}`}
                            className='mr-2 inline-block'
                            width={16}
                            height={16}
                        />
                        {href}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default BookMark
