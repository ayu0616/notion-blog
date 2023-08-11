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

// メインの処理
(async () => {
    const pageData = await fetch(`${BASE_URL}/databases/${NOTION_DATABASE_ID}/query`, {
        method: "POST",
        headers: HEADERS,
    }).then((res) => res.json());

    console.log(pageData);
})();
