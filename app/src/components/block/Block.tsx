import Paragraph from '@/components/block/Paragraph'
import Heading from '@/components/block/heading/Heading'
import { Block as BlockData } from '@/type/page/block/block'
import { RichText as RichTextData } from '@/type/page/block/richText'
import BookMark from './BookMark'
import Equation from './Equation'
import RichText from './RichText'
import BulletedList from './bulletedList/BulletedList'
import BulletedListItem from './bulletedList/BulletedListItem'
import Callout from './callout/Callout'
import Code from './code/Code'
import Divider from './divider/Divider'
import Image from './image/Image'
import NumberedList from './numberedList/NumberedList'
import NumberedListItem from './numberedList/NumberedListItem'
import TableOfContent from './tableOfContent/TableOfContent'
import Video from './video/Video'

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

const richToText = (data: RichTextData[]) =>
    data.reduce((acc, cur) => acc + cur.text, '')

export const Block = ({ data, ...props }: BlockProps) => {
    switch (data.type) {
        case 'paragraph':
            return (
                <Paragraph>
                    <RichTexts datas={data.richTexts} />
                    <Blocks datas={data.children} />
                </Paragraph>
            )
        case 'heading_1':
            return (
                <Heading className='heading-1' level={3} color={data.color}>
                    <RichTexts datas={data.richTexts} />
                    <Blocks datas={data.children} />
                </Heading>
            )
        case 'heading_2':
            return (
                <Heading className='heading-2' level={4} color={data.color}>
                    <RichTexts datas={data.richTexts} />
                    <Blocks datas={data.children} />
                </Heading>
            )
        case 'heading_3':
            return (
                <Heading className='heading-3' level={5} color={data.color}>
                    <RichTexts datas={data.richTexts} />
                    <Blocks datas={data.children} />
                </Heading>
            )
        case 'callout':
            return (
                <Callout
                    icon={data.icon}
                    color={data.color}
                    content={<RichTexts datas={data.richTexts} />}
                >
                    <Blocks datas={data.children} />
                </Callout>
            )
        case 'bulleted_list':
            return (
                <BulletedList>
                    {data.listItems.map((listItem, i) => (
                        <Block key={i} data={listItem} />
                    ))}
                </BulletedList>
            )
        case 'bulleted_list_item':
            return (
                <BulletedListItem>
                    <RichTexts datas={data.richTexts} />
                    <Blocks datas={data.children} />
                </BulletedListItem>
            )
        case 'numbered_list':
            return (
                <NumberedList>
                    {data.listItems.map((listItem, i) => (
                        <Block key={i} data={listItem} />
                    ))}
                </NumberedList>
            )
        case 'numbered_list_item':
            return (
                <NumberedListItem>
                    <RichTexts datas={data.richTexts} />
                    <Blocks datas={data.children} />
                </NumberedListItem>
            )
        case 'bookmark':
            return <BookMark href={data.url}></BookMark>
        case 'code':
            return (
                <Code language={data.language}>
                    {richToText(data.richTexts)}
                </Code>
            )
        case 'divider':
            return <Divider />
        case 'equation':
            return <Equation math={data.expression} />
        case 'image':
            const alt = (() => {
                if (data.caption.length) {
                    return richToText(data.caption) //キャプションがあればキャプションをaltにする
                } else {
                    return data.url //なければ画像のURLをaltにする
                }
            })()
            return <Image src={data.url} alt={alt}></Image>
        case 'video':
            return <Video url={data.url} />
        case 'table_of_contents':
            return <TableOfContent></TableOfContent>
        default:
            return <></>
    }
}

export const Blocks = ({ datas }: { datas?: BlockData[] | null }) => {
    return (
        <>
            {datas?.map((data, i) => {
                return <Block key={i} data={data}></Block>
            })}
        </>
    )
}
