import { Page } from "./type/page";

require("dotenv").config();

// envs
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

// constant variables
const BASE_URL = "https://api.notion.com/v1";
const HEADERS = {
    Authorization: `Bearer ${NOTION_API_KEY}`,
    "Notion-Version": "2022-06-28",
};

// APIから帰ってきたデータを整形する
const convertToPages = (data: any) => {
    const pages: Page[] = data.results.map((p: any) => {
        const page: Page = {
            id: p.id,
            title: p.properties.title.title[0] ? p.properties.title.title[0].plain_text : "",
            tags: p.properties.tags.multi_select.map((tag: any) => {
                return { name: tag.name, color: tag.color };
            }),
            lastEditedTime: new Date(p.last_edited_time),
            slug: p.properties.slug.rich_text[0] ? p.properties.slug.rich_text[0].plain_text : "",
            status: p.properties.status.status.name,
            publishDate: p.properties.publish_date.date ? new Date(p.properties.publish_date.date.start) : null,
            blocks: [],
        };
        return page;
    });
    return pages;
};

// データベース上にあるページの情報をAPIから取得する
const getPageData = async () => {
    const data = await fetch(`${BASE_URL}/databases/${NOTION_DATABASE_ID}/query`, {
        method: "POST",
        headers: HEADERS,
    }).then((res) => res.json());
    return data;
};

// メインの処理
(async () => {
    const data = await getPageData();
    const pages = convertToPages(data);
    console.log(pages);
})();
