import { ReactNode } from 'react'

interface AccordionButtonProps {
    children?: ReactNode
    open?: boolean
}

const AccordionButton = ({ open = false, ...props }: AccordionButtonProps) => {
    return (
        <div
            {...props}
            className='accordion-button group cursor-pointer select-none transition-all duration-300 ease-in-out group-data-[variant="default"]:rounded-md group-data-[variant="default"]:bg-white group-data-[variant="default"]:hover:bg-slate-50 group-data-[variant="default"]:active:bg-slate-100 group-data-[variant="default"]:data-[open="true"]:rounded-b-none group-data-[variant="default"]:data-[open="true"]:border-b'
            data-open={open}
        ></div>
    )
}

export default AccordionButton
