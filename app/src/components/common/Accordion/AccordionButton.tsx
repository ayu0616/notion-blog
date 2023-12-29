'use client'

import { ReactNode, useContext } from 'react'

import { AccordionContext } from './Accordion'
import './style.scss'

interface AccordionButtonProps {
    children?: ReactNode
}

const AccordionButton = ({ ...props }: AccordionButtonProps) => {
    const { isOpen, toggle } = useContext(AccordionContext)
    return (
        <div
            {...props}
            className='accordion-button group cursor-pointer select-none transition-all duration-300 ease-in-out'
            data-open={isOpen}
            onClick={toggle}
        ></div>
    )
}

export default AccordionButton
