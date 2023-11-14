'use client'

import { useEffect, useState } from 'react'

import {
    Accordion,
    AccordionButton,
    AccordionContent,
    AccordionIcon,
} from '@/components/common/Accordion'

import Heading from '../Heading/Heading'

interface TableOfContentProps {}

interface HeadingData {
    text: string
    level: number
    id: string
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
            const id = h.id
            return { level, text, id }
        })
        setHeadings(headingDatas)
    }, [])

    return (
        <Accordion>
            <Heading className='border-none p-0' level={3}>
                <AccordionButton>
                    <div className='hover:inherit active:inherit flex cursor-pointer items-center justify-between px-4 py-2'>
                        <div className='flex-1 text-center'>〜目次〜</div>
                        <AccordionIcon />
                    </div>
                </AccordionButton>
            </Heading>
            <AccordionContent>
                <ul className='space-y-1 px-8 py-6'>
                    {headings.map((h, i) => (
                        <li key={i} className={plClass(h.level)}>
                            <a
                                className='cursor-pointer hover:underline'
                                onClick={() => {
                                    smoothScroll(h.id)
                                }}
                            >
                                {h.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </AccordionContent>
        </Accordion>
    )
}

export default TableOfContent

const plClass = (level: number) => {
    switch (level) {
        case 1:
            return 'pl-0'
        case 2:
            return 'pl-6'
        case 3:
            return 'pl-10'
        default:
            return 'pl-0'
    }
}

const smoothScroll = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    })
}
