interface ParagraphProps {
    children?: React.ReactNode
}

const Paragraph = ({ children, ...props }: ParagraphProps) => {
    return <p className='space-y-4'>{children}</p>
}

export default Paragraph
