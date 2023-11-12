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
                    src={data.url.replace('../app/public', '')}
                    alt={alt}
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
                    {data.children && data.has_row_header ? (
                        <>
                            <TableHead>
                                <TableRow>
                                    {(
                                        data.children[0] as TableRowData
                                    ).cells.map((cell, i) => (
                                        <TableCell isHead key={i}>
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
                                                    isHead={
                                                        data.has_column_header &&
                                                        j === 0
                                                    }
                                                    key={j}
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
                                                isHead={
                                                    data.has_column_header &&
                                                    j === 0
                                                }
                                                key={j}
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

export const Blocks = ({ datas }: { datas?: BlockData[] | null }) => {
    return (
        <>
            {datas?.map((data, i) => {
                return (
                    <div className='mb-10 last:mb-0 md:mb-12' key={i}>
                        <Block data={data}></Block>
                    </div>
                )
            })}
        </>
    )
}
