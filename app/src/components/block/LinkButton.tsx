import { getUrlData } from '@/util/getUrlData'
import ImageBase from '../common/ImageBase'

interface LinkButtonProps {
    href: string
}

const LinkButton = async ({ href, ...props }: LinkButtonProps) => {
    const { title, iconUrl } = await getUrlData(href)

    return (
        <a
            className='inline-flex items-center rounded bg-white p-1 drop-shadow hover:drop-shadow-sm'
            href={href}
            target='_blank'
            rel='noopener noreferrer'
        >
            <ImageBase
                src={iconUrl}
                alt={`icon of ${href}`}
                className='mr-1 inline-block h-4 w-4 md:h-5 md:w-5'
            />
            <span className='flex-1'>{title}</span>
        </a>
    )
}

export default LinkButton
