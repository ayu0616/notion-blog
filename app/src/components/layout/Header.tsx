'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { BsList, BsXLg } from 'react-icons/bs'
import { FaFile, FaHome, FaList } from 'react-icons/fa'

interface MenuItem {
    icon: JSX.Element
    title: string
    href?: string
}

const Header = () => {
    const [open, setOpen] = useState(false)
    const navElem = useRef<HTMLDivElement>(null)
    const ulElem = useRef<HTMLUListElement>(null)

    const menu: MenuItem[] = [
        {
            icon: <FaHome />,
            title: 'ホーム',
        },
        {
            icon: <FaFile />,
            title: '最新記事',
        },
        {
            icon: <FaList />,
            title: 'タグ別',
        },
    ]
    const navHeight = 49 * menu.length

    const toggleOpen = () => setOpen((prev) => !prev)

    useEffect(() => {
        if (open) {
            navElem.current?.style.setProperty('height', `${navHeight}px`)
            setTimeout(() => {
                ulElem.current?.classList.remove('hidden')
            }, 250)
        } else {
            navElem.current?.style.setProperty('height', '0')
            ulElem.current?.classList.add('hidden')
        }
    }, [open, navHeight])

    return (
        <header className='sticky left-0 top-0 z-50 w-full items-center justify-between bg-orange-500 text-white md:flex'>
            <div className='flex items-center justify-between'>
                <h1 className='p-3'>
                    <Link href='/'>はっさくの旅ブログ</Link>
                </h1>
                <div
                    className='p-3 text-4xl hover:bg-orange-600 active:bg-orange-700 md:hidden'
                    onClick={toggleOpen}
                >
                    {open ? <BsXLg /> : <BsList />}
                </div>
            </div>
            <nav
                ref={navElem}
                className='transition-[height] duration-500 ease-in-out md:block md:h-[auto!important]'
            >
                <ul className='md:flex md:pr-3' ref={ulElem}>
                    {menu.map((item, index) => (
                        <li
                            key={index}
                            className='border-t border-white hover:bg-orange-600 active:bg-orange-700 md:border-t-0'
                        >
                            <Link href={item.href ?? '/'}>
                                <div className='flex items-center gap-1 p-3'>
                                    {item.icon}
                                    {item.title}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
