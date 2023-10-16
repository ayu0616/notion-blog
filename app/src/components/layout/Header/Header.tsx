import Link from 'next/link'
import { BsList, BsX } from 'react-icons/bs'
import { FaFile, FaHome, FaList } from 'react-icons/fa'

import {
    Accordion,
    AccordionButton,
    AccordionContent,
} from '@/components/common/Accordion'

interface MenuItem {
    icon: JSX.Element
    title: string
    href?: string
}

const Header = () => {
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
            href: '/tag',
        },
    ]

    return (
        <header className='sticky left-0 top-0 z-50 w-full bg-orange-500 text-white'>
            <Accordion
                variant='unstyled'
                className='items-center justify-between md:flex'
            >
                <div className='flex items-center justify-between'>
                    <h1 className='px-6 py-4 text-2xl'>
                        <Link href='/'>はっさくの旅ブログ</Link>
                    </h1>
                    <AccordionButton>
                        <div className='p-2 text-4xl md:hidden'>
                            <div className='relative rounded-full bg-orange-500 p-1 hover:bg-orange-600 active:bg-orange-700'>
                                <div className='opacity-0'>
                                    <BsX />
                                </div>
                                <div className='absolute-center opacity-0 transition-opacity duration-300 group-data-[open="true"]:opacity-100'>
                                    <BsX />
                                </div>
                                <div className='absolute-center opacity-0 transition-opacity duration-300 group-data-[open="false"]:opacity-100'>
                                    <BsList />
                                </div>
                            </div>
                        </div>
                    </AccordionButton>
                </div>
                <AccordionContent className='md:h-[auto!important]'>
                    <nav className='bg-orange-500 md:block'>
                        <ul className='md:flex md:pr-3'>
                            {menu.map((item, index) => (
                                <li
                                    key={index}
                                    className='border-t border-white hover:bg-orange-600 active:bg-orange-700 md:border-t-0'
                                >
                                    <Link href={item.href ?? '/'}>
                                        <div className='flex items-center gap-1 px-6 py-3 md:px-3'>
                                            {item.icon}
                                            {item.title}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </AccordionContent>
            </Accordion>
        </header>
    )
}

export default Header
