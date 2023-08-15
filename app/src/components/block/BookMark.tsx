'use client'

import { useEffect, useState } from 'react'

interface BookMarkProps {
    href: string
}

const BookMark = ({ href, ...props }: BookMarkProps) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        const getTitle = async () => {
            const resData = await fetch('/api/page-data?url=' + href).then(
                (res) => res.json(),
            )
            const { title, description } = resData
            setTitle(title)
            setDescription(description)
        }
        getTitle()
    }, [href])

    return (
        <div className='rounded-md bg-white drop-shadow-lg hover:drop-shadow-xl active:drop-shadow-md'>
            <a href={href} target='_blank' rel='noopener noreferrer'>
                <div className='p-3'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p className='text-right text-sm text-gray-500'>{href}</p>
                </div>
            </a>
        </div>
    )
}

export default BookMark
