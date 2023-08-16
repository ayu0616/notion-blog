import { CSSProperties } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import './Code.style.scss'

interface CodeProps {
    children: string
    language: string
    showLineNumbers?: boolean
    wrapLongLines?: boolean
    style?: { [key: string]: CSSProperties }
}

const Code = ({
    style = vscDarkPlus,
    showLineNumbers = true,
    ...props
}: CodeProps) => {
    // TODO: コピーしたことを通知するポップアップを作成する
    const copyCode = () => {
        navigator.clipboard.writeText(props.children)
    }
    return (
        <div className='code-block-container relative'>
            <div className='absolute left-0 top-0 w-full border-b border-b-gray-300 p-2 text-right text-sm text-white'>
                <button
                    className='hover:text-yellow-300 hover:underline active:text-yellow-400'
                    onClick={copyCode}
                >
                    copy
                </button>
            </div>
            <SyntaxHighlighter
                {...props}
                showLineNumbers={showLineNumbers}
                style={style}
            ></SyntaxHighlighter>
        </div>
    )
}

export default Code
