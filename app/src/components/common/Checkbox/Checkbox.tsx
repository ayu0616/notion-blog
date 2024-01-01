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
                    'block cursor-pointer select-none rounded-full px-2 py-1 opacity-40 transition-all duration-300 ease-in-out hover:opacity-60 peer-checked:opacity-100 peer-checked:outline',
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
            return 'bg-red-300/50 text-red-950 outline-red-300'
        case 'blue':
            return 'bg-blue-300/50 text-blue-950 outline-blue-300'
        case 'green':
            return 'bg-green-400/50 text-green-950 outline-green-400'
        case 'yellow':
            return 'bg-yellow-300/50 text-yellow-950 outline-yellow-300'
        case 'purple':
            return 'bg-purple-300/50 text-purple-950 outline-purple-300'
        case 'pink':
            return 'bg-pink-300/50 text-pink-950 outline-pink-300'
        case 'gray':
            return 'bg-gray-300/50 text-gray-950 outline-gray-300'
        case 'brown':
            return 'bg-amber-600/50 text-amber-950 outline-amber-600'
        case 'orange':
            return 'bg-orange-300/50 text-orange-950 outline-orange-300'
        default:
            return 'bg-slate-300/50 text-slate-950 outline-slate-300'
    }
}
