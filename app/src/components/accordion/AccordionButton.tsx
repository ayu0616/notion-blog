import { ReactNode, useState } from 'react'

interface AccordionButtonProps {
    children?: ReactNode
}

const AccordionButton = ({ ...props }: AccordionButtonProps) => {
    const [open, setOpen] = useState(false)

    return (
        <div
            {...props}
            className='accordion-button group cursor-pointer border-b hover:bg-slate-50 active:bg-slate-100'
            data-open={open}
            onClick={() => setOpen((p) => !p)}
        ></div>
    )
}

export default AccordionButton
