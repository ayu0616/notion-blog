interface NumberedListItemProps {
    children?: React.ReactNode
}

const NumberedListItem = ({ ...props }: NumberedListItemProps) => {
    return <li {...props}></li>
}

export default NumberedListItem
