import { CSSProperties, useEffect, useRef, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Tooltip from '../../common/tooltip/Tooltip'
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
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [buttonElem, setButtonElem] = useState<HTMLButtonElement | null>(null)
    useEffect(() => {
        setButtonElem(buttonRef.current)
    }, [buttonRef])
    const [tooltipShow, setTooltipShow] = useState(false)
    const copyCode = () => {
        navigator.clipboard.writeText(props.children)
        setTooltipShow(true)
        setTimeout(() => {
            setTooltipShow(false)
        }, 1000)
    }
    return (
        <div
            className='code-block-container rounded-md'
            style={{ background: style['pre[class*="language-"]'].background }}
        >
            <div className='w-full border-b border-b-gray-300 p-2 flex justify-between text-sm text-white'>
                <div className='p-1'>{ props.language}</div>
                <button
                    ref={buttonRef}
                    className='p-1 hover:text-yellow-300 hover:underline active:text-yellow-400'
                    onClick={copyCode}
                >
                    copy
                </button>
                <Tooltip
                    isShow={tooltipShow}
                    elem={buttonElem}
                    placement='left'
                >
                    コードがコピーされました！
                </Tooltip>
            </div>
            <SyntaxHighlighter
                {...props}
                showLineNumbers={showLineNumbers}
                style={style}
                customStyle={{ margin: 0 }}
            ></SyntaxHighlighter>
        </div>
    )
}

export default Code
