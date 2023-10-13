import { ReactNode, useEffect, useRef } from 'react'

interface AccordionProps {
    children?: ReactNode
}

const Accordion = ({ ...props }: AccordionProps) => {
    const elem = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!elem.current) return
        const button =
            elem.current.querySelector<HTMLDivElement>('.accordion-button')
        const content =
            elem.current.querySelector<HTMLDivElement>('.accordion-content')
        if (!button || !content) return
        const contentHeight = content.clientHeight
        content.style.height = '0px'
        button.addEventListener('click', () => {
            if (button.dataset.open === 'true') {
                content.style.height = `${contentHeight}px`
            } else {
                content.style.height = '0px'
            }
        })
    }, [])

    return (
        <div
            {...props}
            ref={elem}
            className='accordion rounded-md border'
        ></div>
    )
}

export default Accordion
