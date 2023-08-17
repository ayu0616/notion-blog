interface HeadingProps {
    children?: React.ReactNode
    level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = ({ level = 1, ...props }: HeadingProps) => {
    switch (level) {
        case 1:
            return <h1 {...props}></h1>
        case 2:
            return <h2 {...props}></h2>
        case 3:
            return <h3 {...props}></h3>
        case 4:
            return <h4 {...props}></h4>
        case 5:
            return <h5 {...props}></h5>
        case 6:
            return <h6 {...props}></h6>
        default:
            return <h1 {...props}></h1>
    }
}

export default Heading
