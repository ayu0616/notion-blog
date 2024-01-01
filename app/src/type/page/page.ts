import { Block } from './block/block'

export type TagColor =
    | 'blue'
    | 'brown'
    | 'default'
    | 'gray'
    | 'green'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'yellow'

export interface Tag {
    color: TagColor
    name: string
}

export interface Page {
    blocks: Block[]
    description: string
    id: string
    image: string | null
    lastEditedTime: string
    publishDate: string | null
    slug: string
    status: string
    tags: Tag[]
    title: string
}
