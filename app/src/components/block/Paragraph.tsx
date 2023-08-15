interface ParagraphProps {
    children: React.ReactNode
}

const Paragraph = ({ children, ...props }: ParagraphProps) => {
    return <p>{children}</p>
}

export default Paragraph
