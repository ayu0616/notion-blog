'use client'
import './Code.style.scss'

import { CSSProperties, useEffect, useRef, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import Tooltip from '../../common/Tooltip/Tooltip'

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
    language: _language,
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
    const language = _language.replace('c++', 'cpp')
    return (
        <div
            className='code-block-container rounded-md'
            style={{ background: style['pre[class*="language-"]'].background }}
        >
            <div className='flex w-full justify-between border-b border-b-gray-300 p-2 text-sm text-white'>
                <div className='p-1'>{language}</div>
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
                language={language}
                style={style}
                customStyle={{ margin: 0 }}
            ></SyntaxHighlighter>
        </div>
    )
}

export default Code
