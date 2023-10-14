import { ReactNode } from 'react'

interface AccordionContentProps {
    children?: ReactNode
}

const AccordionContent = ({ ...props }: AccordionContentProps) => {
    return (
        <div className='accordion-content overflow-hidden rounded-b-md bg-white transition-all duration-300 ease-in-out'>
            <div {...props}></div>
        </div>
    )
}

export default AccordionContent
