import './NumberedList.style.scss'

interface NumberedListProps {
    children?: React.ReactNode
}

const NumberedList = ({ ...props }: NumberedListProps) => {
    return <ol {...props}></ol>
}

export default NumberedList
