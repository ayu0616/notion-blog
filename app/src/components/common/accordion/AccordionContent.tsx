import { ReactNode } from 'react'

interface AccordionContentProps {
    children?: ReactNode
}

const AccordionContent = ({ ...props }: AccordionContentProps) => {
    return (
        <div className='accordion-content overflow-hidden transition-all duration-300 ease-in-out group-data-[variant="default"]:rounded-b-md group-data-[variant="default"]:bg-white'>
            <div {...props}></div>
        </div>
    )
}

export default AccordionContent
