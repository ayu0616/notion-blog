interface CardProps {
    title: string
    description: string
    imgSrc?: string
    onClick?: () => void
}

const Card = ({ title, description, imgSrc, ...props }: CardProps) => {
    return (
        <div
            className='select-none rounded-md bg-white drop-shadow-md hover:drop-shadow-lg'
            {...props}
        >
            <div className='flex flex-col'>
                {/* 画像 */}
                {imgSrc && (
                    <img
                        src={imgSrc}
                        alt={title}
                        className='drag-none rounded-t-md'
                    />
                )}
                {/* タイトルと説明 */}
                <div className='p-3'>
                    <h3>{title}</h3>
                    <p className='text-gray-700'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
