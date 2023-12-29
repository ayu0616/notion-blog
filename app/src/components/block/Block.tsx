import Heading from '@/components/block/Heading/Heading'
import Paragraph from '@/components/block/Paragraph'
import {
    Block as BlockData,
    TableRow as TableRowData,
} from '@/type/page/block/block'
import { RichText as RichTextData } from '@/type/page/block/richText'

import BookMark from './BookMark/BookMark'
import BulletedList from './BulletedList/BulletedList'
import BulletedListItem from './BulletedList/BulletedListItem'
import Callout from './Callout/Callout'
import Code from './Code/Code'
import { Column, ColumnList } from './Column'
import Divider from './Divider/Divider'
import { Embed } from './Embed'
import Equation from './Equation/Equation'
import Image from './Image/Image'
import NumberedList from './NumberedList/NumberedList'
import NumberedListItem from './NumberedList/NumberedListItem'
import { RichText } from './RichText'
import { Table, TableBody, TableCell, TableHead, TableRow } from './Table'
import TableOfContent from './TableOfContent/TableOfContent'
import Video from './Video/Video'

interface BlockProps {
    data: BlockData
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
                    <Children datas={data.children} />
                </Paragraph>
            )
        case 'heading_1':
            return (
                <Heading className='heading-1' color={data.color} level={3}>
                    <RichTexts datas={data.richTexts} />
                    <Blocks datas={data.children} />
                </Heading>
            )
        case 'heading_2':
            return (
                <Heading className='heading-2' color={data.color} level={4}>
                    <RichTexts datas={data.richTexts} />
                    <Blocks datas={data.children} />
                </Heading>
            )
        case 'heading_3':
            return (
                <Heading className='heading-3' color={data.color} level={5}>
                    <RichTexts datas={data.richTexts} />
                    <Blocks datas={data.children} />
                </Heading>
            )
        case 'callout':
            return (
                <Callout
                    color={data.color}
                    content={<RichTexts datas={data.richTexts} />}
                    icon={data.icon}
                >
                    <Blocks datas={data.children} space='sm' />
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
                    <Children datas={data.children} />
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
                    <Children datas={data.children} />
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
            return (
                <Image
                    alt={alt}
                    src={data.url.replace('../app/public', '')}
                ></Image>
            )
        case 'video':
            return <Video url={data.url} />
        case 'table_of_contents':
            return <TableOfContent></TableOfContent>
        case 'table':
            return (
                <Table
                // hasRowHeader={data.has_row_header}
                // hasColHeader={data.has_column_header}
                >
                    {data.children && data.hasColumnHeader ? (
                        <>
                            <TableHead>
                                <TableRow>
                                    {(
                                        data.children[0] as TableRowData
                                    ).cells.map((cell, i) => (
                                        <TableCell key={i} isHead>
                                            <RichTexts datas={cell} />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.children.slice(1).map((row, i) => (
                                    <TableRow key={i}>
                                        {(row as TableRowData).cells.map(
                                            (cell, j) => (
                                                <TableCell
                                                    key={j}
                                                    isHead={
                                                        data.hasRowHeader &&
                                                        j === 0
                                                    }
                                                >
                                                    <RichTexts datas={cell} />
                                                </TableCell>
                                            ),
                                        )}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </>
                    ) : (
                        <TableBody>
                            {data.children?.map((row, i) => (
                                <TableRow key={i}>
                                    {(row as TableRowData).cells.map(
                                        (cell, j) => (
                                            <TableCell
                                                key={j}
                                                isHead={
                                                    data.hasRowHeader && j === 0
                                                }
                                            >
                                                <RichTexts datas={cell} />
                                            </TableCell>
                                        ),
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    )}
                </Table>
            )
        case 'table_row':
            return (
                <TableRow>
                    {data.cells.map((cell, i) => (
                        <TableCell key={i}>
                            <RichTexts datas={cell} />
                        </TableCell>
                    ))}
                </TableRow>
            )
        case 'column_list':
            return (
                <ColumnList>
                    <Blocks datas={data.children} />
                </ColumnList>
            )
        case 'column':
            return (
                <Column>
                    <Blocks datas={data.children} />
                </Column>
            )
        case 'synced_block':
            return (
                <>
                    <Blocks datas={data.children}></Blocks>
                </>
            )
        case 'embed':
            return <Embed url={data.url}></Embed>
        default:
            return <></>
    }
}

/** 子ブロック
 *
 * `Blocks`との違い
 *   - `<div></div>`で囲まれている
 *   - インデントがついている
 */
const Children = ({ datas }: { datas?: BlockData[] | null }) => {
    return (
        <div className='pl-4'>
            <Blocks datas={datas} />
        </div>
    )
}

export const Blocks = ({
    datas,
    space = 'default',
}: {
    datas?: BlockData[] | null
    space?: 'default' | 'sm'
}) => {
    const spaceClass = (() => {
        switch (space) {
            case 'default':
                return 'space-y-10 md:space-y-12'
            case 'sm':
                return 'space-y-3 md:space-y-4'
        }
    })()

    if (!datas) return <></>

    return (
        <div className={spaceClass}>
            {datas.map((data, i) => {
                return (
                    <div key={i}>
                        <Block data={data}></Block>
                    </div>
                )
            })}
        </div>
    )
}
