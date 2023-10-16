import './NumberedList.style.scss'

interface NumberedListProps {
    children?: React.ReactNode
}

const NumberedList = ({ ...props }: NumberedListProps) => {
    return <ol {...props} className='numbered-list list-inside'></ol>
}

export default NumberedList
