import { BlockMath } from 'react-katex'

interface EquationProps {
    math: string
}

const Equation = ({ math, ...props }: EquationProps) => {
    return (
        <div>
            <BlockMath>{math}</BlockMath>
        </div>
    )
}

export default Equation
