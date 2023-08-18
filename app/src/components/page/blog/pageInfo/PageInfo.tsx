import { Tag as TagType } from '@/type/page/page'
import dateToStr from '../../../../util/dateToStr'
import TagList from '../../../common/tag/TagList'
import Image from '@/components/common/ImageBase'

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
            <Image src={image} alt={'ヘッダ画像'}></Image>
        </div>
    )
}

export default PageInfo
