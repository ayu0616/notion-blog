import { ReactNode } from 'react'

interface ButtonProps {
    mode?: 'primary' | 'secondary' | 'orange'
    children?: ReactNode
    disabled?: boolean
    onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ mode = 'primary', ...props }: ButtonProps) => {
    const baseClass =
        'rounded-md border-0 px-4 py-2 text-white outline-none outline-0 outline-offset-0 focus:outline-4 disabled:opacity-75 disabled:cursor-not-allowed'
    const modeClass = (() => {
        switch (mode) {
            case 'primary':
                return 'bg-blue-600 enabled:hover:bg-blue-700 enabled:active:bg-blue-800 outline-blue-900/80'
            case 'secondary':
                return 'bg-gray-500 enabled:hover:bg-gray-600 enabled:active:bg-gray-700 outline-gray-500/80'
            case 'orange':
                return 'bg-orange-600 enabled:hover:bg-orange-700 enabled:active:bg-orange-800 outline-orange-900/80'
            default:
                return ''
        }
    })()
    return (
        <button
            type='button'
            className={[baseClass, modeClass].join(' ')}
            {...props}
        ></button>
    )
}
