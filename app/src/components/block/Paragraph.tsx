import { RichText as RichTextData } from '@/type/page/block/richText'

import { RichTexts } from './Block'

interface ParagraphProps {
    children?: React.ReactNode
    richTextData?: RichTextData[]
}

const Paragraph = ({ children, richTextData, ...props }: ParagraphProps) => {
    return (
        <div className='space-y-4'>
            <p>
                <RichTexts datas={richTextData} />
            </p>
            {children}
        </div>
    )
}

export default Paragraph
