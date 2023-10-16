'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import Card from '@/components/common/Card/Card'
import Checkbox, { CheckboxProps } from '@/components/common/Checkbox/Checkbox'
import ImageBase from '@/components/common/ImageBase/ImageBase'
import { SearchForm } from '@/components/common/SearchForm'
import TagList from '@/components/common/Tag/TagList'
import { Page } from '@/type/page/page'
import dateToStr from '@/util/dateToStr'

interface BlogPageProps {
    pageData: Page[]
    searchDefaultValue?: string
}

/** ブログのページ一覧とタグによる検索を表示するコンポーネント */
const BlogPages = ({
    pageData,
    searchDefaultValue,
    ...props
}: BlogPageProps) => {
    const [showPageData, setPageData] = useState<Page[]>(pageData)
    const tagData = getTagData(pageData)
    const [checkedTag, setCheckedTag] = useState<string[]>([])
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
                    return page.tags.some((tag) => {
                        return checkedTag.includes(tag.name)
                    })
                }),
            )
        }
    }, [checkedTag, pageData])
    return (
        <>
            <div className='px-4'>
                <label htmlFor='search-query'>ページを検索</label>
                <SearchForm
                    siz='lg'
                    placeholder='ブログタイトル'
                    action='/search'
                    name='query'
                    defaultValue={searchDefaultValue}
                    id='search-query'
                />
            </div>
            <div className='flex gap-2 px-4'>
                {tagData.map((tag, i) => {
                    return <Checkbox {...tag} key={i} onChange={handleChange} />
                })}
            </div>
            <div className='grid gap-4 px-4'>
                {showPageData.map((page, i) => {
                    return (
                        <Link href={`/blog/${page.slug}`} key={i}>
                            <Card horizontal className=''>
                                <ImageBase
                                    src={page.image ?? '/no_image.jpg'}
                                    alt=''
                                    className='w-1/3 rounded-l-md'
                                    objectFit='cover'
                                ></ImageBase>
                                <div className='flex flex-1 flex-col gap-2 p-3'>
                                    <h3>{page.title}</h3>
                                    <TagList
                                        isLink
                                        tagData={page.tags}
                                    ></TagList>
                                    <p className='text-end text-sm text-gray-600'>
                                        {dateToStr(
                                            new Date(page.publishDate ?? 0),
                                        )}
                                    </p>
                                    <p>{page.description}</p>
                                </div>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </>
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
            value: t.name,
            color: t.color,
        })
    })
    return tagData
}