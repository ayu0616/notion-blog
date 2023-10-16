import Link from 'next/link'

interface AnchorProps {
    isInnerLink?: boolean
    href: string
    children: React.ReactNode
    className?: string
}

const Anchor = ({
    isInnerLink = false,
    className = '',
    ...props
}: AnchorProps) => {
    const classes = ['text-blue-600 hover:underline', className].join('')
    if (isInnerLink) {
        return <Link {...props} className={classes}></Link>
    } else {
        return (
            <a
                {...props}
                className={classes}
                target='_blank'
                rel='noopener noreferrer'
            ></a>
        )
    }
}

export default Anchor
