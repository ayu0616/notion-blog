import { BlockContent } from "./blockContent";

export interface Block {
    id: string;
    hasChildren: boolean;
    type: string;
    children: Block[];
    content: BlockContent;
}
