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
        toggleContent(content, button.dataset.open ?? '')
        button.addEventListener('click', () => {
            button.dataset.open = (!(button.dataset.open === 'true')).toString()
            toggleContent(content, button.dataset.open ?? '')
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

const toggleContent = (content: HTMLDivElement, open: string) => {
    const actualHeight = (content.firstChild as HTMLDivElement).clientHeight
    if (open === 'true') {
        content.style.height = `${actualHeight}px`
        setTimeout(() => {
            content.style.height = 'auto'
        }, 300)
    } else {
        content.style.height = `${actualHeight}px`
        setTimeout(() => {
            content.style.height = '0px'
        }, 1)
    }
}
