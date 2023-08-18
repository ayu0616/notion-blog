import { Tag as TagType } from '@/type/page/page'
import dateToStr from '../../../../util/dateToStr'
import TagList from '../../../common/tag/TagList'

interface PageInfoProps {
    title: string
    tags: TagType[]
    publishDate: string
}

const PageInfo = ({ title, tags, publishDate, ...props }: PageInfoProps) => {
    return (
        <div className='space-y-2'>
            <h2>{title}</h2>
            <TagList tagData={tags} className='justify-end' />
            <p className='text-end text-sm text-gray-600'>
                {dateToStr(publishDate)}
            </p>
        </div>
    )
}

export default PageInfo
