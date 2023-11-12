'use client'
import './Code.style.scss'

import { CSSProperties, useState } from 'react'
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

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
    const [tooltipShow, setTooltipShow] = useState(false)
    const handleClick = () => {
        navigator.clipboard.writeText(props.children)
        setTooltipShow(true)
        setTimeout(() => {
            setTooltipShow(false)
        }, 2000)
    }
    const language = _language.replace('c++', 'cpp')

    const clipOpacity = tooltipShow ? 'opacity-100' : 'opacity-0'
    const clipCheckOpacity = tooltipShow ? 'opacity-0' : 'opacity-100'
    return (
        <div
            className='code-block-container rounded-md'
            style={{ background: style['pre[class*="language-"]'].background }}
        >
            <div className='flex w-full items-center justify-between border-b border-b-gray-300 px-3 py-2 text-sm text-white'>
                <div className='p-1'>{language}</div>
                <button
                    className='relative h-5 w-5 hover:text-yellow-300 hover:underline active:text-yellow-400'
                    onClick={handleClick}
                >
                    <div
                        className={[
                            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-opacity duration-300 ease-in-out',
                            clipOpacity,
                        ].join(' ')}
                    >
                        <FaClipboardCheck></FaClipboardCheck>
                    </div>
                    <div
                        className={[
                            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-opacity duration-300 ease-in-out',
                            clipCheckOpacity,
                        ].join(' ')}
                    >
                        <FaClipboard></FaClipboard>
                    </div>
                </button>
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
