import { useEffect, useRef } from 'react'
import './Tooltip.style.scss'

interface TooltipProps {
    children?: React.ReactNode
    placement?: 'top' | 'bottom' | 'left' | 'right'
    elem?: HTMLElement | null
    isShow?: boolean
    bgOpacity?: 50 | 75 | 100
}

const Tooltip = ({
    children,
    placement = 'bottom',
    elem,
    isShow = false,
    bgOpacity = 75,
    ...props
}: TooltipProps) => {
    const container = useRef<HTMLDivElement>(null)
    const initialize = () => {
        if (!container.current || !elem) return
        const top = elem.getBoundingClientRect().top
        const left = elem.getBoundingClientRect().left
        const bottom = elem.getBoundingClientRect().bottom
        const right = elem.getBoundingClientRect().right
        const elemHeight = elem.getBoundingClientRect().height
        const elemWidth = elem.getBoundingClientRect().width
        const containerHeight = container.current.scrollHeight
        const containerWidth = container.current.scrollWidth
        switch (placement) {
            case 'top':
                container.current.style.top = `${top - containerHeight}px`
                container.current.style.left = `${
                    left + (elemWidth - containerWidth) / 2
                }px`
                break
            case 'bottom':
                container.current.style.top = `${bottom}px`
                container.current.style.left = `${
                    left + (elemWidth - containerWidth) / 2
                }px`
                break
            case 'left':
                container.current.style.top = `${
                    top + (elemHeight - containerHeight) / 2
                }px`
                container.current.style.left = `${left - containerWidth}px`
                break
            case 'right':
                container.current.style.top = `${
                    top + (elemHeight - containerHeight) / 2
                }px`
                container.current.style.left = `${right}px`
                break
            default:
                break
        }
    }
    useEffect(initialize, [elem, placement, container, isShow])
    try {
        window.addEventListener('resize', initialize)
    } catch (e) {}

    const isShowClass = isShow ? '' : 'opacity-0 -z-50'
    let containerColorClass = ''
    let contentColorClass = ''
    switch (bgOpacity) {
        case 50:
            containerColorClass = 'before:bg-black/50 before:border-black/50'
            contentColorClass = 'bg-black/50'
            break
        case 75:
            containerColorClass = 'before:bg-black/75 before:border-black/75'
            contentColorClass = 'bg-black/75'
            break
        case 100:
            containerColorClass = 'before:bg-black/100 before:border-black/100'
            contentColorClass = 'bg-black/100'
            break
    }
    return (
        <div
            ref={container}
            className={[
                'tooltip-container absolute flex items-center before:absolute',
                isShowClass,
                containerColorClass,
            ].join(' ')}
            data-placement={placement}
            onClick={(e) => e.stopPropagation()}
        >
            <div
                className={[
                    'rounded-md p-2 text-sm text-white',
                    contentColorClass,
                ].join(' ')}
            >
                {children}
            </div>
        </div>
    )
}

export default Tooltip
