'use client'

import { useEffect, useState } from 'react'

interface TableOfContentProps {}

interface HeadingData {
    text: string
    level: number
}

const TableOfContent = ({ ...props }: TableOfContentProps) => {
    const [headings, setHeadings] = useState<HeadingData[]>([])

    useEffect(() => {
        const headings = document.querySelectorAll(
            '.heading-1, .heading-2, .heading-3',
        )
        const headingDatas = Array.from(headings).map((h) => {
            const level = parseInt(
                h.classList.value.match(/heading-(\d)/)?.[1] || '1',
            )
            const text = h.textContent || ''
            return { level, text }
        })
        setHeadings(headingDatas)
    }, [])

    return (
        <div>
            {headings.map((h, i) => (
                <p key={i} className={plClass(h.level)}>
                    {h.text}
                </p>
            ))}
        </div>
    )
}

export default TableOfContent

const plClass = (level: number) => {
    switch (level) {
        case 1:
            return 'pl-0'
        case 2:
            return 'pl-4'
        case 3:
            return 'pl-8'
        default:
            return 'pl-0'
    }
}
