import { ForwardedRef, ReactNode, forwardRef } from 'react'

interface ButtonProps {
    mode?: 'primary' | 'secondary' | 'orange'
    children?: ReactNode
    disabled?: boolean
    onClick?: () => void
    className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef(function Button(
    { mode = 'primary', className = '', ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
) {
    const baseClass =
        'rounded-md border-0 px-4 py-2 text-white ring-none ring-0 ring-offset-0 focus:ring-4 disabled:opacity-75 disabled:cursor-not-allowed'
    const modeClass = (() => {
        switch (mode) {
            case 'primary':
                return 'bg-blue-600 enabled:hover:bg-blue-700 enabled:active:bg-blue-800 ring-blue-500/80'
            case 'secondary':
                return 'bg-gray-500 enabled:hover:bg-gray-600 enabled:active:bg-gray-700 ring-gray-500/80'
            case 'orange':
                return 'bg-orange-600 enabled:hover:bg-orange-700 enabled:active:bg-orange-800 ring-orange-500/80'
            default:
                return ''
        }
    })()
    return (
        <button
            className={[baseClass, modeClass, className].join(' ')}
            type='button'
            {...props}
            ref={ref}
        ></button>
    )
})
