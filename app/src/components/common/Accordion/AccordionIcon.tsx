import { FaAngleDown } from 'react-icons/fa'

interface AccordionIconProps {}

const AccordionIcon = ({ ...props }: AccordionIconProps) => {
    return (
        <div
            className='transition-all duration-300 ease-in-out group-data-[open="true"]:rotate-180'
            {...props}
        >
            <FaAngleDown />
        </div>
    )
}

export default AccordionIcon
