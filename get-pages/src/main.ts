import Dotenv from "dotenv";
import fs from "fs";
import path from "path";
import {
    Block,
    BlockBase,
    BlockType,
    Bookmark,
    BulletedList,
    BulletedListItem,
    Callout,
    Code,
    Divider,
    Equation,
    Heading1,
    Heading2,
    Heading3,
    Image,
    NumberedList,
    NumberedListItem,
    Paragraph,
    Table,
    TableOfContents,
    TableRow,
    Video,
} from "./type/block/block";
import { RichText } from "./type/block/richText";
import { Page } from "./type/page";
import { deepCopy, fetchImg, imgToWebp, writeFile } from "./util";

if (fs.existsSync(path.join(__dirname, "../.env"))) {
    Dotenv.config({ path: path.join(__dirname, "../.env") });

    fs.readFileSync(path.join(__dirname, "../.env"), "utf-8")
        .split("\n")
        .forEach((line) => {
            const [key, value] = line.split("=");
            process.env[key] = value.replace(/["']/g, "");
        });
}

// envs
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

// constant variables
const BASE_URL = "https://api.notion.com/v1";
const HEADERS = {
    Authorization: `Bearer ${NOTION_API_KEY}`,
    "Notion-Version": "2022-06-28",
};

// データを格納するパス
const DATA_PATH = "../app/public/data";

/** データベース上にあるページの情報をAPIから取得する */
const getPageData = async () => {
    const data = await fetch(`${BASE_URL}/databases/${NOTION_DATABASE_ID}/query`, {
        method: "POST",
        headers: HEADERS,
    }).then((res) => res.json());
    return data;
};

/** IDからブロックの情報をAPIから取得する */
const getBlockData = async (id: string) => {
    const data = await fetch(`${BASE_URL}/blocks/${id}/children`, {
        method: "GET",
        headers: HEADERS,
    }).then((res) => res.json());
    return data;
};

/** APIから帰ってきたページのデータを整形する */
const convertToPages = async (data: any) => {
    const pages: Page[] = [];
    for (let p of data.results) {
        const slug = p.properties.slug.rich_text[0] ? p.properties.slug.rich_text[0].plain_text : "";
        const lastEditedTime = p.last_edited_time; //最終更新日時
        let isUpdated = true;
        if (fs.existsSync(pageJsonPath(slug))) {
            const prevData: Page = JSON.parse(fs.readFileSync(pageJsonPath(slug), "utf-8"));
            if (new Date(prevData.lastEditedTime).getTime() === new Date(lastEditedTime).getTime()) {
                isUpdated = false;
            }
        }
        let image: null | string = null;
        if (p.properties.image.files[0]) {
            if (p.properties.image.files[0].type === "external") {
                image = p.properties.image.files[0].external.url;
            } else {
                // 画像を取得する
                const { buffer, type } = await fetchImg(p.properties.image.files[0].file.url);
                // 画像を保存するパス
                const ext = "webp";
                const fname = `${slug}.${ext}`;
                const savePath = path.join(DATA_PATH, "thumbnail", fname);
                // 画像を保存する
                writeFile(savePath, await imgToWebp(buffer));
                // 画像のURLをローカルのパスに変更する
                image = path.join("/", "data", "thumbnail", fname);
            }
        }
        const page: Page = {
            id: p.id,
            title: p.properties.title.title[0] ? p.properties.title.title[0].plain_text : "",
            tags: p.properties.tags.multi_select.map((tag: any) => {
                return { name: tag.name, color: tag.color };
            }),
            lastEditedTime,
            slug,
            status: p.properties.status.status.name,
            publishDate: p.properties.publish_date.date?.start ?? null,
            blocks: isUpdated ? await getBlocks(p.id, slug) : [],
            image,
            description: p.properties.description.rich_text.map((text: any) => text.plain_text).join(""),
        };
        pages.push(page);
    }
    return pages;
};

/** APIから帰ってきたデータをRichTextに変換する */
const convertToRichTexts = (data: any[]) => {
    return data.map((text) => {
        return {
            type: text.type,
            text: text.plain_text,
            href: text.href,
            annotations: text.annotations,
        } as RichText;
    });
};

/** APIから帰ってきたブロックのデータを整形する */
const convertToBlocks = async (data: any, slug: string) => {
    const blocks: Block[] = [];
    for (let b of data.results) {
        const blockBase: BlockBase = {
            id: b.id,
            type: b.type,
            hasChildren: b.has_children,
            children: b.has_children ? await getBlocks(b.id, slug) : null,
        };
        switch (b.type as BlockType) {
            case "paragraph":
                const paragraph: Paragraph = {
                    ...blockBase,
                    type: "paragraph",
                    richTexts: convertToRichTexts(b.paragraph.rich_text),
                    color: b.paragraph.color,
                };
                blocks.push(paragraph);
                break;
            case "heading_1":
                const heading1: Heading1 = {
                    ...blockBase,
                    type: "heading_1",
                    richTexts: convertToRichTexts(b.heading_1.rich_text),
                    color: b.heading_1.color,
                    isToggleable: b.heading_1.is_toggleable,
                };
                blocks.push(heading1);
                break;
            case "heading_2":
                const heading2: Heading2 = {
                    ...blockBase,
                    type: "heading_2",
                    richTexts: convertToRichTexts(b.heading_2.rich_text),
                    color: b.heading_2.color,
                    isToggleable: b.heading_2.is_toggleable,
                };
                blocks.push(heading2);
                break;
            case "heading_3":
                const heading3: Heading3 = {
                    ...blockBase,
                    type: "heading_3",
                    richTexts: convertToRichTexts(b.heading_3.rich_text),
                    color: b.heading_3.color,
                    isToggleable: b.heading_3.is_toggleable,
                };
                blocks.push(heading3);
                break;
            case "bulleted_list_item":
                const bulletedListItem: BulletedListItem = {
                    ...blockBase,
                    type: "bulleted_list_item",
                    richTexts: convertToRichTexts(b.bulleted_list_item.rich_text),
                    color: b.bulleted_list_item.color,
                };
                blocks.push(bulletedListItem);
                break;
            case "numbered_list_item":
                const numberedListItem: NumberedListItem = {
                    ...blockBase,
                    type: "numbered_list_item",
                    richTexts: convertToRichTexts(b.numbered_list_item.rich_text),
                    color: b.numbered_list_item.color,
                };
                blocks.push(numberedListItem);
                break;
            case "bookmark":
                const bookmark: Bookmark = {
                    ...blockBase,
                    type: "bookmark",
                    url: b.bookmark.url,
                    caption: convertToRichTexts(b.bookmark.caption),
                };
                blocks.push(bookmark);
                break;
            case "code":
                const code: Code = {
                    ...blockBase,
                    type: "code",
                    richTexts: convertToRichTexts(b.code.rich_text),
                    language: b.code.language,
                    caption: convertToRichTexts(b.code.caption),
                };
                blocks.push(code);
                break;
            case "equation":
                const equation: Equation = {
                    ...blockBase,
                    type: "equation",
                    expression: b.equation.expression,
                };
                blocks.push(equation);
                break;
            case "callout":
                const callout: Callout = {
                    ...blockBase,
                    type: "callout",
                    icon: b.callout.icon[b.callout.icon.type],
                    richTexts: convertToRichTexts(b.callout.rich_text),
                    color: b.callout.color,
                };
                blocks.push(callout);
                break;
            case "divider":
                const divider: Divider = {
                    ...blockBase,
                    type: "divider",
                };
                blocks.push(divider);
                break;
            case "image":
                let url = "";
                if (b.image.type === "external") {
                    url = b.image.external.url;
                } else {
                    // 画像を取得する
                    const { buffer, type } = await fetchImg(b.image.file.url);
                    // 画像を保存するパス
                    const ext = "webp";
                    const fname = `${b.id}.${ext}`;
                    const savePath = path.join(pageDirPath(slug), fname);
                    // 画像を保存する
                    writeFile(savePath, await imgToWebp(buffer));
                    // 画像のURLをローカルのパスに変更する
                    url = savePath.replace("../app/public", "");
                }
                const image: Image = {
                    ...blockBase,
                    type: "image",
                    caption: convertToRichTexts(b.image.caption),
                    url,
                };
                blocks.push(image);
                break;
            case "video":
                const video: Video = {
                    ...blockBase,
                    type: "video",
                    caption: convertToRichTexts(b.video.caption),
                    url: b.video[b.video.type].url,
                };
                blocks.push(video);
                break;
            case "table_of_contents":
                const tableOfContents: TableOfContents = {
                    ...blockBase,
                    type: "table_of_contents",
                };
                blocks.push(tableOfContents);
                break;
            case "table":
                const table: Table = {
                    ...blockBase,
                    type: "table",
                    has_column_header: b.table.has_column_header,
                    has_row_header: b.table.has_row_header,
                };
                blocks.push(table);
                break;
            case "table_row":
                const tableRow: TableRow = {
                    ...blockBase,
                    type: "table_row",
                    cells: b.table_row.cells.map((c: any[]) => convertToRichTexts(c)),
                };
                blocks.push(tableRow);
                break;
            default:
                break;
        }
    }
    return blocks;
};

/** ページの情報を取得する */
const getPages = async () => {
    const data = await getPageData();
    const pages = await convertToPages(data);
    return pages;
};

/** ブロックの情報を取得する */
const getBlocks = async (id: string, slug: string) => {
    const data = await getBlockData(id);
    const blocks = await convertToBlocks(data, slug);
    return wrapListItems(blocks);
};

/** リストアイテムをグルーピング */
const wrapListItems = (blocks: Block[]) => {
    const res: Block[] = [];
    const bWrapper: BulletedListItem[] = [];
    const nWrapper: NumberedListItem[] = [];
    blocks.forEach((b) => {
        if (b.type === "bulleted_list_item") {
            bWrapper.push(b);
        } else if (b.type === "numbered_list_item") {
            nWrapper.push(b);
        } else {
            if (bWrapper.length > 0) {
                res.push({
                    type: "bulleted_list",
                    listItems: deepCopy(bWrapper),
                } as BulletedList);
                bWrapper.length = 0;
            }
            if (nWrapper.length > 0) {
                res.push({
                    type: "numbered_list",
                    listItems: deepCopy(nWrapper),
                } as NumberedList);
                nWrapper.length = 0;
            }
            res.push(b);
        }
        if (b.hasChildren && b.children) {
            b.children = wrapListItems(b.children);
        }
    });
    if (bWrapper.length > 0) {
        res.push({
            type: "bulleted_list",
            listItems: deepCopy(bWrapper),
        } as BulletedList);
        bWrapper.length = 0;
    }
    if (nWrapper.length > 0) {
        res.push({
            type: "numbered_list",
            listItems: deepCopy(nWrapper),
        } as NumberedList);
        nWrapper.length = 0;
    }
    return res;
};

/** ページデータのディレクトリのパス */
const pageDirPath = (slug: string) => path.join(DATA_PATH, "pages", slug);

/** ページコンテンツを記載したjsonファイルのパス */
const pageJsonPath = (slug: string) => path.join(pageDirPath(slug), "data.json");

// メインの処理
(async () => {
    const pages = await getPages();
    for (const page of pages) {
        if (fs.existsSync(pageJsonPath(page.slug))) {
            const prevData: Page = JSON.parse(fs.readFileSync(pageJsonPath(page.slug), "utf-8"));
            if (new Date(prevData.lastEditedTime).getTime() === new Date(page.lastEditedTime).getTime()) {
                continue;
            }
        }
        writeFile(pageJsonPath(page.slug), JSON.stringify(page));
        console.log(pageJsonPath(page.slug));
    }
    // ページのデータからブロックのデータを削除したもの
    const pagesWithoutBlocks = pages.map((p) => {
        const keysWithoutBlocks = (Object.keys(p) as (keyof Page)[]).filter((key) => key !== "blocks");
        const pageWithoutBlocks: any = {};
        keysWithoutBlocks.forEach((key) => {
            pageWithoutBlocks[key] = p[key];
        });
        return pageWithoutBlocks;
    });
    writeFile(path.join(DATA_PATH, "pages.json"), JSON.stringify(pagesWithoutBlocks));
    console.log(path.join(DATA_PATH, "pages.json"));
})();
