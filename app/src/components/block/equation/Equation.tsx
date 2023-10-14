import { BlockMath } from 'react-katex'

interface EquationProps {
    math: string
}

const Equation = ({ math, ...props }: EquationProps) => {
    return (
        <div className='text-lg'>
            <BlockMath>{math}</BlockMath>
        </div>
    )
}

export default Equation
