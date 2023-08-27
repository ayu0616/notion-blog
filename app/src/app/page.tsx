import Card from '@/components/common/Card'
import Image from '@/components/common/ImageBase'
import Carousel from '@/components/common/carousel/Carousel'
import TagList from '@/components/common/tag/TagList'
import { Page } from '@/type/page/page'
import dateToStr from '@/util/dateToStr'
import fs from 'fs'
import Link from 'next/link'

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL

export default async function Home() {
    // const pageData: Page[] = await fetch(
    //     `${NEXT_PUBLIC_URL}/data/pages.json`,
    // ).then((res) => res.json())
    const pageData: Page[] = JSON.parse(
        fs.readFileSync('./public/data/pages.json', 'utf-8'),
    )
    pageData.sort((a, b) => {
        return (
            new Date(b.publishDate ?? '1970-01-01').getTime() -
            new Date(a.publishDate ?? '1970-01-01').getTime()
        )
    })
    const carouselData = pageData.map((page) => {
        return {
            image: page.image ?? '/no_image.jpg',
            publishDate: page.publishDate ?? '1970-01-01',
            title: page.title,
            tags: page.tags,
            slug: page.slug,
        }
    })
    return (
        <main className='mx-auto max-w-4xl space-y-4 pb-4'>
            <Carousel data={carouselData}></Carousel>
            <div className='grid gap-4 px-4'>
                {pageData.map((page, i) => {
                    return (
                        <Link href={`/blog/${page.slug}`} key={i}>
                            <Card horizontal className=''>
                                <Image
                                    src={page.image ?? '/no_image.jpg'}
                                    alt=''
                                    className='w-1/3 rounded-l-md'
                                    objectFit='cover'
                                ></Image>
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
        </main>
    )
}
