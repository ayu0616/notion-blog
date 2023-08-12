import { Block } from "./block/block";

type TagColor = "blue" | "brown" | "default" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "yellow";

export interface Tag {
    name: string;
    color: TagColor;
}

export interface Page {
    id: string;
    title: string;
    lastEditedTime: Date;
    tags: Tag[];
    slug: string;
    status: string;
    publishDate: Date | null;
    blocks: Block[];
}
