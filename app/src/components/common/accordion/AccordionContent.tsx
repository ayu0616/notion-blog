import { ReactNode } from 'react'

import './style.scss'

interface AccordionContentProps {
    children?: ReactNode
}

const AccordionContent = ({ ...props }: AccordionContentProps) => {
    return (
        <div className='accordion-content overflow-hidden transition-all duration-300 ease-in-out'>
            <div {...props}></div>
        </div>
    )
}

export default AccordionContent
