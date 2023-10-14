import { ReactNode } from 'react'

interface AccordionButtonProps {
    children?: ReactNode
    open?: boolean
}

const AccordionButton = ({ open = false, ...props }: AccordionButtonProps) => {
    // const [isOpen, setOpen] = useState(open)

    return (
        <div
            {...props}
            className='accordion-button group cursor-pointer border-b hover:bg-slate-50 active:bg-slate-100'
            data-open={open}
            // onClick={() => setOpen((p) => !p)}
        ></div>
    )
}

export default AccordionButton
