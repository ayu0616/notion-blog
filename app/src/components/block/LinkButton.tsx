import { getUrlData } from '@/util/getUrlData'
import Image from 'next/image'

interface LinkButtonProps {
    href: string
}

const LinkButton = async ({ href, ...props }: LinkButtonProps) => {
    const { title, iconUrl } = await getUrlData(href)

    return (
        <a
            className='inline-block items-center rounded bg-white p-1 drop-shadow hover:drop-shadow-sm'
            href={href}
            target='_blank'
            rel='noopener noreferrer'
        >
            <span className='whitespace-pre-wrap break-all'>
                <span className='relative mr-1 inline-block h-3 w-3 md:h-4 md:w-4'>
                    <Image
                        src={iconUrl}
                        alt={`icon of ${href}`}
                        fill
                        sizes='100%'
                        className='absolute'
                    />
                </span>
                <span>{title}</span>
            </span>
        </a>
    )
}

export default LinkButton
