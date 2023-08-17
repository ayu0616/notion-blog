import { Color } from "../color";
import { RichText } from "./richText";

export type BlockType =
    | "bookmark"
    | "breadcrumb"
    | "bulleted_list"
    | "bulleted_list_item"
    | "callout"
    | "child_database"
    | "child_page"
    | "code"
    | "column"
    | "column_list"
    | "divider"
    | "embed"
    | "equation"
    | "file"
    | "heading_1"
    | "heading_2"
    | "heading_3"
    | "image"
    | "link_preview"
    | "link_to_page"
    | "numbered_list"
    | "numbered_list_item"
    | "paragraph"
    | "pdf"
    | "quote"
    | "synced_block"
    | "table"
    | "table_of_contents"
    | "table_row"
    | "template"
    | "to_do"
    | "toggle"
    | "unsupported"
    | "video";

export type Block =
    | Paragraph
    | Heading1
    | Heading2
    | Heading3
    | BulletedListItem
    | NumberedListItem
    | Bookmark
    | Code
    | Equation
    | Callout
    | Divider
    | Image
    | BulletedList
    | NumberedList;

export interface BlockBase {
    id: string;
    hasChildren: boolean;
    type: BlockType;
    children: Block[] | null;
}

/** リッチテキストつきのコンテンツ */
export interface RichTextBlockContent extends BlockBase {
    richTexts: RichText[];
    color: Color;
}

/** 脚注つきのコンテンツ */
export interface WithCaption {
    caption: RichText[];
}

/** 段落 */
export interface Paragraph extends RichTextBlockContent {
    type: "paragraph";
}

/** 見出し */
export interface Heading extends RichTextBlockContent {
    type: "heading_1" | "heading_2" | "heading_3";
    isToggleable: boolean;
}

/** 見出し1 */
export interface Heading1 extends Heading {
    type: "heading_1";
}

/** 見出し2 */
export interface Heading2 extends Heading {
    type: "heading_2";
}

/** 見出し3 */
export interface Heading3 extends Heading {
    type: "heading_3";
}

/** 箇条書きリスト */
export interface BulletedList {
    type: "bulleted_list";
    listItems: BulletedListItem[];
}

/** 箇条書きリストアイテム */
export interface BulletedListItem extends RichTextBlockContent {
    type: "bulleted_list_item";
}

/** 番号付きリスト */
export interface NumberedList {
    type: "numbered_list";
    listItems: NumberedListItem[];
}

/** 番号付きリストアイテム */
export interface NumberedListItem extends RichTextBlockContent {
    type: "numbered_list_item";
}

/** ブックマーク */
export interface Bookmark extends BlockBase, WithCaption {
    type: "bookmark";
    url: string;
}

/** コードブロック */
export interface Code extends BlockBase, WithCaption {
    type: "code";
    richTexts: RichText[];
    language: string;
}

/** 数式 */
export interface Equation extends BlockBase {
    type: "equation";
    expression: string;
}

/** コールアウト */
export interface Callout extends RichTextBlockContent {
    type: "callout";
    icon: string;
}

/** 仕切り線 */
export interface Divider extends BlockBase {
    type: "divider";
}

/** 画像 */
export interface Image extends BlockBase, WithCaption {
    type: "image";
    url: string;
}
