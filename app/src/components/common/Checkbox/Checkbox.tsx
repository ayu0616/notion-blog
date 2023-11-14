import { useId } from 'react'

import { TagColor } from '@/type/page/page'

export interface CheckboxProps {
    checked?: boolean
    color?: TagColor
    name?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
}

const Checkbox = ({ value, color = 'default', ...props }: CheckboxProps) => {
    const uuid = useId()
    const colorClass = getColorClass(color)
    return (
        <div>
            <input
                {...props}
                className='peer hidden'
                id={uuid}
                type='checkbox'
                value={value}
            />
            <label
                className={[
                    'block cursor-pointer select-none rounded-full px-2 py-1 opacity-40 transition-opacity duration-300 ease-in-out hover:opacity-60 peer-checked:opacity-100',
                    colorClass,
                ].join(' ')}
                htmlFor={uuid}
            >
                {value}
            </label>
        </div>
    )
}

export default Checkbox

const getColorClass = (color: TagColor) => {
    switch (color) {
        case 'red':
            return 'bg-red-300/50 text-red-950'
        case 'blue':
            return 'bg-blue-300/50 text-blue-950'
        case 'green':
            return 'bg-green-400/50 text-green-950'
        case 'yellow':
            return 'bg-yellow-300/50 text-yellow-950'
        case 'purple':
            return 'bg-purple-300/50 text-purple-950'
        case 'pink':
            return 'bg-pink-300/50 text-pink-950'
        case 'gray':
            return 'bg-gray-300/50 text-gray-950'
        case 'brown':
            return 'bg-amber-600/50 text-amber-950'
        case 'orange':
            return 'bg-orange-300/50 text-orange-950'
        default:
            return 'bg-slate-300/50 text-slate-950'
    }
}
