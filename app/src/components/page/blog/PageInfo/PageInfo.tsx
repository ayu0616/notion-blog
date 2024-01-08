import Image from 'next/image'

import { Tag as TagType } from '@/type/page/page'

import dateToStr from '../../../../util/dateToStr'
import TagList from '../../../common/Tag/TagList'

interface PageInfoProps {
    image: string
    lastEditedTime: string
    publishDate: string
    tags: TagType[]
    title: string
}

const PageInfo = ({
    title,
    tags,
    publishDate,
    lastEditedTime,
    image,
    ...props
}: PageInfoProps) => {
    const imgUrl =
        image.startsWith('/') || image.startsWith('http')
            ? image
            : `http://localhost:8000/images/${image}`

    return (
        <div className='space-y-6 rounded-md border border-orange-200 bg-white p-6 md:p-9'>
            <h2>{title}</h2>
            <TagList isLink className='justify-end' tagData={tags} />
            <div className='space-y-2'>
                <p className='text-end text-sm text-gray-600'>
                    公開日：{dateToStr(publishDate)}
                </p>
                <p className='text-end text-sm text-gray-600'>
                    最終更新日：{dateToStr(lastEditedTime)}
                </p>
            </div>
            <div className='flex max-h-[50vh] justify-center'>
                <Image
                    alt={'ヘッダ画像'}
                    className='max-h-[50vh] object-scale-down'
                    height={4000}
                    src={imgUrl}
                    width={4000}
                ></Image>
            </div>
        </div>
    )
}

export default PageInfo
