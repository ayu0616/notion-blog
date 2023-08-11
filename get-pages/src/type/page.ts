import { Block } from "./block/block";

export interface Tag {
    name: string;
    color: string;
}

export interface Page {
    id: string;
    title: string;
    lastEditedTime: Date;
    tags: Tag[];
    slug: string;
    status: string;
    publishDate: Date;
    blocks: Block[];
}
