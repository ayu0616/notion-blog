import { Color } from "../color";
import { RichText } from "./richText";

export type BlockType =
    | "bookmark"
    | "breadcrumb"
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

export interface BlockContent {
    type: BlockType;
}

/** リッチテキストつきのコンテンツ */
export interface RichTextBlockContent extends BlockContent {
    richTexts: RichText[];
    color: Color;
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
export interface BulletedListItem extends RichTextBlockContent {
    type: "bulleted_list_item";
}

/** 番号付きリスト */
export interface NumberedListItem extends RichTextBlockContent {
    type: "numbered_list_item";
}

/** ブックマーク */
export interface Bookmark extends BlockContent {
    type: "bookmark";
    url: string;
    caption: string;
}

/** コードブロック */
export interface Code extends BlockContent {
    type: "code";
    richTexts: RichText[];
    language: string;
    caption: string;
}

/** 数式 */
export interface Equation extends BlockContent {
    type: "equation";
    expression: string;
}

/** コールアウト */
export interface Callout extends RichTextBlockContent {
    type: "callout";
    icon: string;
}

/** 仕切り線 */
export interface Divider extends BlockContent {
    type: "divider";
}

/** 画像 */
export interface Image extends BlockContent {
    type: "image";
    url: string;
    caption: string;
}
