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
        toggleContent(button, content)
        button.addEventListener('click', () => {
            toggleContent(button, content)
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

const toggleContent = (button: HTMLDivElement, content: HTMLDivElement) => {
    content.style.height = '0px'
    const contentHeight = (content.firstChild as HTMLDivElement).clientHeight
    if (button.dataset.open === 'true') {
        content.style.height = `${contentHeight}px`
        button.dataset.open = 'false'
    } else {
        content.style.height = '0px'
        button.dataset.open = 'true'
    }
}
