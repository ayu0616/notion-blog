import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { FaSearch } from 'react-icons/fa'

interface SearchFormProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    action?: string
}

const SearchForm = ({ type, className, action, ...props }: SearchFormProps) => {
    return (
        <form action={action}>
            <div className='flex items-center'>
                <input
                    {...props}
                    className={[
                        'h-8 flex-1 rounded-l-full px-2 focus:outline-none focus:ring-2 focus:ring-orange-600/75',
                        className,
                    ].join(' ')}
                    type='text'
                />
                <button
                    title='検索ボタン'
                    type='submit'
                    className='h-8 rounded-r-full bg-orange-600 pl-2 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-600/75'
                >
                    <FaSearch />
                </button>
            </div>
        </form>
    )
}

export default SearchForm
