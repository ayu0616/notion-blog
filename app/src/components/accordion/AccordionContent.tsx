import { ReactNode } from 'react'

interface AccordionContentProps {
    children?: ReactNode
}

const AccordionContent = ({ ...props }: AccordionContentProps) => {
    return (
        <div
            className='accordion-content overflow-hidden transition-all duration-300 ease-in-out'
            {...props}
        ></div>
    )
}

export default AccordionContent
