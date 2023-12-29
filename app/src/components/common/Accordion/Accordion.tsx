'use client'

import { ReactNode, createContext, useEffect, useRef, useState } from 'react'

import './style.scss'

interface AccordionProps {
    children?: ReactNode
    className?: string
    variant?: 'default' | 'unstyled' | 'orange'
}

export const AccordionContext = createContext({
    isOpen: false,
    toggle: () => {},
})

const Accordion = ({
    variant = 'default',
    className,
    ...props
}: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen((prev) => !prev)
    }
    const elem = useRef<HTMLDivElement>(null)
    const styleClass = variant === 'default' ? 'rounded-md border' : ''

    useEffect(() => {
        if (!elem.current) return
        const content =
            elem.current.querySelector<HTMLDivElement>('.accordion-content')
        if (!content) return
        toggleContent(content, isOpen)
    }, [isOpen])

    return (
        <AccordionContext.Provider value={{ isOpen, toggle }}>
            <div
                {...props}
                ref={elem}
                className={['accordion group', styleClass, className].join(' ')}
                data-variant={variant}
            ></div>
        </AccordionContext.Provider>
    )
}

export default Accordion

const toggleContent = (content: HTMLDivElement, isOpen: boolean) => {
    const actualHeight = (content.firstChild as HTMLDivElement).clientHeight
    if (isOpen) {
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
