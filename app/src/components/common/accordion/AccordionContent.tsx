import { ReactNode } from 'react'

import './style.scss'

interface AccordionContentProps {
    children?: ReactNode
    className?: string
}

const AccordionContent = ({ className, ...props }: AccordionContentProps) => {
    return (
        <div
            className={[
                'accordion-content overflow-hidden transition-all duration-300 ease-in-out',
                className,
            ].join(' ')}
        >
            <div {...props}></div>
        </div>
    )
}

export default AccordionContent
