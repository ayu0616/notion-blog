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
            className='accordion-button group cursor-pointer rounded-md bg-white transition-all duration-300 ease-in-out hover:bg-slate-50 active:bg-slate-100 data-[open="true"]:rounded-b-none data-[open="true"]:border-b'
            data-open={open}
            // onClick={() => setOpen((p) => !p)}
        ></div>
    )
}

export default AccordionButton
