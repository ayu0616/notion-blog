'use client'

import { useEffect, useRef, useState } from 'react'

interface EmbedProps {
    url?: string
}

const Embed = ({ url = '', ...props }: EmbedProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)

    useEffect(() => {
        const resize = () => {
            setWidth(ref.current?.clientWidth ?? 0)
            setHeight(ref.current?.clientHeight ?? 0)
        }
        resize()
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [ref])

    return (
        <div
            ref={ref}
            className='mx-auto h-[800px] max-h-[75vh] w-full rounded-md drop-shadow-md'
        >
            <iframe
                frameBorder='0'
                height={height}
                src={url}
                width={width}
            ></iframe>
        </div>
    )
}

export default Embed
