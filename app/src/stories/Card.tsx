import { ReactNode } from 'react'
import Image from './Image'

interface CardProps {
    imgSrc?: string
    horizontal?: boolean
    children?: ReactNode
    onClick?: () => void
}

const Card = ({ children, imgSrc, horizontal, ...props }: CardProps) => {
    return (
        <div
            className='select-none rounded-md bg-white drop-shadow-md hover:drop-shadow-lg'
            {...props}
        >
            <div
                className={['flex', horizontal ? 'flex-row' : 'flex-col'].join(
                    ' ',
                )}
            >
                {/* 画像 */}
                {imgSrc && (
                    <Image
                        src={imgSrc}
                        alt={imgSrc}
                        className='drag-none object-cover aspect-square rounded-t-md'
                    />
                )}
                {/* コンテンツ */}
                <div className='flex flex-col gap-1 p-3'>{children}</div>
            </div>
        </div>
    )
}

export default Card
