'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import Heading from '@/components/block/Heading/Heading'
import {
    Accordion,
    AccordionButton,
    AccordionContent,
    AccordionIcon,
} from '@/components/common/Accordion'
import Card from '@/components/common/Card/Card'
import Checkbox, { CheckboxProps } from '@/components/common/Checkbox/Checkbox'
import ImageBase from '@/components/common/ImageBase/ImageBase'
import { SearchForm } from '@/components/common/SearchForm'
import TagList from '@/components/common/Tag/TagList'
import { Page } from '@/type/page/page'
import dateToStr from '@/util/dateToStr'

interface BlogPageProps {
    pageData: Page[]
    /** 検索欄がデフォルトで開いているかどうか */
    searchDefaultOpen?: boolean
    searchDefaultValue?: string
}

/** ブログのページ一覧とタグによる検索を表示するコンポーネント */
const BlogPages = ({
    pageData,
    searchDefaultValue,
    searchDefaultOpen,
    ...props
}: BlogPageProps) => {
    const [showPageData, setPageData] = useState<Page[]>(pageData)
    const tagData = getTagData(pageData)
    const [checkedTag, setCheckedTag] = useState<string[]>([])
    const [searchValue, setSearchValue] = useState<string>(
        searchDefaultValue ?? '',
    )
    const [composing, setComposing] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked
        const value = e.target.value
        setCheckedTag((prev) => {
            if (checked) {
                return [...prev, value]
            } else {
                return prev.filter((tag) => tag !== value)
            }
        })
    }
    useEffect(() => {
        if (checkedTag.length === 0) {
            setPageData(pageData)
        } else {
            setPageData(
                pageData.filter((page) => {
                    return checkedTag.every((tag) => {
                        return page.tags.map((t) => t.name).includes(tag)
                    })
                }),
            )
        }
    }, [checkedTag, pageData])

    useEffect(() => {
        if (composing) return
        if (searchValue === '') {
            setPageData(pageData)
        } else {
            setPageData(
                pageData.filter((page) => {
                    return page.title.includes(searchValue)
                }),
            )
        }
    }, [composing, pageData, searchValue])
    return (
        <div className='space-y-10 px-4'>
            <Accordion variant='orange'>
                <AccordionButton>
                    <div className='flex items-center justify-between px-5 py-3'>
                        <Heading className='flex-1' level={3}>
                            ページを絞り込む
                        </Heading>
                        <AccordionIcon />
                    </div>
                </AccordionButton>
                <AccordionContent>
                    <div className='space-y-6 p-5'>
                        <div className='space-y-4'>
                            <label htmlFor='search-query'>
                                <Heading level={4}>ページを検索</Heading>
                            </label>
                            <div className='rounded-full border border-orange-600'>
                                <SearchForm
                                    action='/search'
                                    id='search-query'
                                    name='query'
                                    placeholder='ブログタイトル'
                                    siz='lg'
                                    value={searchValue}
                                    onChange={(e) =>
                                        setSearchValue(e.target.value)
                                    }
                                    onCompositionEnd={() => setComposing(false)}
                                    onCompositionStart={() =>
                                        setComposing(true)
                                    }
                                />
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <Heading level={4}>タグで絞り込む</Heading>
                            <div className='flex flex-wrap gap-2'>
                                {tagData.map((tag, i) => {
                                    return (
                                        <Checkbox
                                            {...tag}
                                            key={i}
                                            onChange={handleChange}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </Accordion>
            <div className='flex flex-col gap-4'>
                <p className='text-sm text-gray-600'>
                    表示件数 ： {showPageData.length}件
                </p>
                <div className='grid gap-8'>
                    {showPageData.map((page, i) => {
                        return (
                            <Link key={i} href={`/blog/${page.slug}`}>
                                <Card horizontal className=''>
                                    <ImageBase
                                        alt=''
                                        className='w-1/3 rounded-l-md'
                                        objectFit='cover'
                                        src={page.image ?? '/no_image.jpg'}
                                    ></ImageBase>
                                    <div className='flex flex-1 flex-col gap-2 p-3'>
                                        <h3>{page.title}</h3>
                                        <TagList
                                            isLink
                                            gap={1}
                                            tagData={page.tags}
                                        ></TagList>
                                        <p className='text-end text-sm text-gray-600'>
                                            {dateToStr(
                                                new Date(page.publishDate ?? 0),
                                            )}
                                        </p>
                                        <p className='line-clamp-2 text-xs leading-3 md:line-clamp-3 md:text-sm md:leading-4'>
                                            {page.description}
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BlogPages

/** ページにふされているすべてのタグの取得する */
const getTagData = (pageData: Page[]): CheckboxProps[] => {
    const tagSet = new Set<string>()
    pageData.forEach((page) => {
        page.tags.forEach((tag) => {
            tagSet.add(JSON.stringify(tag))
        })
    })
    const tagData: CheckboxProps[] = []
    tagSet.forEach((tag) => {
        const t = JSON.parse(tag)
        tagData.push({
            color: t.color,
            value: t.name,
        })
    })
    return tagData
}
