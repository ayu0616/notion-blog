import Image from 'next/image'

import { getUrlData } from '@/util/getUrlData'

interface LinkButtonProps {
    href: string
}

const LinkButton = async ({ href, ...props }: LinkButtonProps) => {
    const { title, iconUrl } = await getUrlData(href)

    return (
        <a
            className='inline-block items-center rounded bg-white p-1 drop-shadow hover:drop-shadow-sm'
            href={href}
            rel='noopener noreferrer'
            target='_blank'
        >
            <span className='whitespace-pre-wrap break-all'>
                <span className='relative mr-1 inline-block h-3 w-3 md:h-4 md:w-4'>
                    <Image
                        fill
                        alt={`icon of ${href}`}
                        className='absolute'
                        sizes='100%'
                        src={iconUrl}
                    />
                </span>
                <span>{title}</span>
            </span>
        </a>
    )
}

export default LinkButton
