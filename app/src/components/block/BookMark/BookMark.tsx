import ImageBase from '@/components/common/ImageBase/ImageBase'
import { getUrlData } from '@/util/getUrlData'

interface BookMarkProps {
    href: string
}

const BookMark = async ({ href, ...props }: BookMarkProps) => {
    const { title, iconUrl, description } = await getUrlData(href)

    return (
        <div className='rounded-md bg-white drop-shadow-lg hover:drop-shadow-xl active:drop-shadow-md'>
            <a href={href} rel='noopener noreferrer' target='_blank'>
                <div className='space-y-1 p-3'>
                    <h6>{title}</h6>
                    <p className='text-xs leading-3 text-gray-500 md:text-sm'>
                        {description}
                    </p>
                    <div className='flex items-center justify-end overflow-hidden whitespace-nowrap text-xs md:text-sm'>
                        <ImageBase
                            alt={`icon of ${href}`}
                            className='mr-1 inline-block h-[12px] w-[12px] md:mr-2 md:h-4 md:w-4'
                            src={iconUrl}
                        />
                        <p className='max-w-[calc(100%_-_1rem)] md:max-w-[calc(100%_-_1.5rem)]'>
                            {href}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default BookMark
