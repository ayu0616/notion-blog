import Image from 'next/image'

import { Tag as TagType } from '@/type/page/page'

import dateToStr from '../../../../util/dateToStr'
import TagList from '../../../common/Tag/TagList'

interface PageInfoProps {
    title: string
    tags: TagType[]
    publishDate: string
    lastEditedTime: string
    image: string
}

const PageInfo = ({
    title,
    tags,
    publishDate,
    lastEditedTime,
    image,
    ...props
}: PageInfoProps) => {
    return (
        <div className='mb-16 space-y-2'>
            <h2>{title}</h2>
            <TagList tagData={tags} isLink className='justify-end' />
            <p className='text-end text-sm text-gray-600'>
                公開日：{dateToStr(publishDate)}
            </p>
            <p className='text-end text-sm text-gray-600'>
                最終更新日：{dateToStr(lastEditedTime)}
            </p>
            <div className='flex max-h-[50vh] justify-center'>
                <Image
                    className='max-h-[50vh] object-scale-down'
                    width={4000}
                    height={4000}
                    src={image}
                    alt={'ヘッダ画像'}
                ></Image>
            </div>
        </div>
    )
}

export default PageInfo
