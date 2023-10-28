import { ReactNode } from 'react'

import './style.scss'

interface AccordionButtonProps {
    children?: ReactNode
    open?: boolean
}

const AccordionButton = ({ open = false, ...props }: AccordionButtonProps) => {
    return (
        <div
            {...props}
            className='accordion-button group cursor-pointer select-none transition-all duration-300 ease-in-out'
            data-open={open}
        ></div>
    )
}

export default AccordionButton
