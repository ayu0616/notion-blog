import { Tag as TagType } from '@/type/page/page'

import dateToStr from '../../../../util/dateToStr'
import ImageBase from '../../../common/ImageBase'
import TagList from '../../../common/tag/TagList'

interface PageInfoProps {
    title: string
    tags: TagType[]
    publishDate: string
    image: string
}

const PageInfo = ({
    title,
    tags,
    publishDate,
    image,
    ...props
}: PageInfoProps) => {
    return (
        <div className='mb-16 space-y-2'>
            <h2>{title}</h2>
            <TagList tagData={tags} isLink className='justify-end' />
            <p className='text-end text-sm text-gray-600'>
                {dateToStr(publishDate)}
            </p>
            <ImageBase src={image} alt={'ヘッダ画像'}></ImageBase>
        </div>
    )
}

export default PageInfo
