import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { FaSearch } from 'react-icons/fa'

interface SearchFormProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    action?: string
    siz?: 'md' | 'lg'
}

const SearchForm = ({
    type,
    className,
    action,
    siz = 'md',
    ...props
}: SearchFormProps) => {
    const sizeClass = siz === 'md' ? 'h-8 px-2' : 'h-12 px-3'
    const sizeButtonClass = siz === 'md' ? 'h-8 pl-2 pr-3' : 'h-12 pl-3 pr-4'
    return (
        <form action={action}>
            <div className='flex items-center'>
                <input
                    {...props}
                    className={[
                        'flex-1 rounded-l-full transition-all focus:outline-none focus:ring-2 focus:ring-orange-600/75',
                        sizeClass,
                        className,
                    ].join(' ')}
                    type='text'
                />
                <button
                    className={[
                        'rounded-r-full bg-orange-600 text-white transition-all hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600/75 active:bg-orange-400',
                        sizeButtonClass,
                    ].join(' ')}
                    title='検索ボタン'
                    type='submit'
                >
                    <FaSearch />
                </button>
            </div>
        </form>
    )
}

export default SearchForm
