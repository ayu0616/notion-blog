import { ReactNode } from 'react'

interface CardProps {
    children?: ReactNode
    className?: string
    horizontal?: boolean
    onClick?: () => void
}

const Card = ({
    children,
    horizontal,
    className = '',
    ...props
}: CardProps) => {
    return (
        <div
            className='select-none rounded-md bg-white drop-shadow-md hover:drop-shadow-lg'
            {...props}
        >
            <div
                className={[
                    'flex',
                    horizontal ? 'flex-row' : 'flex-col',
                    className,
                ].join(' ')}
            >
                {/* コンテンツ */}
                {children}
            </div>
        </div>
    )
}

export default Card
