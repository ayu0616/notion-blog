import { CSSProperties } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import './Code.style.scss'

interface CodeProps {
    children: string
    language: string
    showLineNumbers?: boolean
    style?: { [key: string]: CSSProperties }
}

const Code = ({
    style = vscDarkPlus,
    showLineNumbers = true,
    ...props
}: CodeProps) => {
    // TODO: コードをコピーする機能を実装する
    return (
        <div className='code-block-container'>
            <div className='absolute left-0 top-0 w-full border-b border-b-gray-300 p-2 text-right text-sm text-white'>
                <button className='hover:text-yellow-300 hover:underline active:text-yellow-400'>
                    copy
                </button>
            </div>
            <SyntaxHighlighter {...props} style={style}></SyntaxHighlighter>
        </div>
    )
}

export default Code
