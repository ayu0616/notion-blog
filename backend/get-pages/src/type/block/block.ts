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
    | NumberedList
    | Video
    | TableOfContents
    | Table
    | TableRow
    | Column
    | ColumnList
    | SyncedBlock
    | Embed;

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
export interface BulletedList extends BlockBase {
    type: "bulleted_list";
    listItems: BulletedListItem[];
}

/** 箇条書きリストアイテム */
export interface BulletedListItem extends RichTextBlockContent {
    type: "bulleted_list_item";
}

/** 番号付きリスト */
export interface NumberedList extends BlockBase {
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

/** 動画 */
export interface Video extends BlockBase, WithCaption {
    type: "video";
    url: string;
}

/** 目次 */
export interface TableOfContents extends BlockBase {
    type: "table_of_contents";
}

/** 表の行 */
export interface TableRow extends BlockBase {
    type: "table_row";
    cells: RichText[][];
}

/** 表 */
export interface Table extends BlockBase {
    type: "table";
    hasColumnHeader: boolean;
    hasRowHeader: boolean;
}

/** 段組みのコンテンツ */
export interface Column extends BlockBase {
    type: "column";
}

/** 段組み */
export interface ColumnList extends BlockBase {
    type: "column_list";
}

/** 同期ブロック */
export interface SyncedBlock extends BlockBase {
    type: "synced_block";
}

/** 埋め込みコンテンツ */
export interface Embed extends BlockBase {
    type: "embed";
    url: string;
}
