import Paragraph from '@/components/block/Paragraph'
import Heading from '@/components/block/heading/Heading'
import { Block as BlockData } from '@/type/page/block/block'
import { RichText as RichTextData } from '@/type/page/block/richText'
import RichText from './RichText'
import Callout from './callout/Callout'

interface BlockProps {
    data: BlockData
}

const Children = ({ datas }: { datas?: BlockData[] | null }) => {
    return (
        <>
            {datas?.map((data, i) => {
                return <Block key={i} data={data}></Block>
            })}
        </>
    )
}

const RichTexts = ({ datas }: { datas?: RichTextData[] | null }) => {
    return (
        <>
            {datas?.map((data, i) => {
                return <RichText key={i} {...data}></RichText>
            })}
        </>
    )
}

const Block = ({ data, ...props }: BlockProps) => {
    switch (data.type) {
        case 'paragraph':
            return (
                <Paragraph>
                    <RichTexts datas={data.richTexts} />
                    <Children datas={data.children} />
                </Paragraph>
            )
        case 'heading_1':
            return (
                <Heading level={1}>
                    <RichTexts datas={data.richTexts} />
                    <Children datas={data.children} />
                </Heading>
            )
        case 'heading_2':
            return (
                <Heading level={2}>
                    <RichTexts datas={data.richTexts} />
                    <Children datas={data.children} />
                </Heading>
            )
        case 'heading_3':
            return (
                <Heading level={3}>
                    <RichTexts datas={data.richTexts} />
                    <Children datas={data.children} />
                </Heading>
            )
        case 'callout':
            return (
                <Callout
                    icon={data.icon}
                    color={data.color}
                    content={<RichTexts datas={data.richTexts} />}
                >
                    <Children datas={data.children} />
                </Callout>
            )
    }
}

export default Block
