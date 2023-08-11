import json
import os
from datetime import datetime
from typing import Any

import dotenv
import requests

# env
dotenv.load_dotenv()
NOTION_API_KEY = os.environ["NOTION_API_KEY"]
NOTION_DATABASE_ID = os.environ["NOTION_DATABASE_ID"]

# constants
BASE_URL = "https://api.notion.com/v1/"

HEADERS = {
    "Authorization": "Bearer " + NOTION_API_KEY,
    "Notion-Version": "2022-06-28",
}

res = requests.post(BASE_URL + "databases/" + NOTION_DATABASE_ID + "/query", headers=HEADERS)


class Tag:
    def __init__(self, name: str, color: str):
        self.name = name
        self.color = color


class Page:
    def __init__(self, data: dict[str, Any]):
        self.id = data["id"]
        self.last_edited_time = datetime.strptime(data["last_edited_time"], "%Y-%m-%dT%H:%M:%S.%fZ")
        self.tags: list[Tag] = [Tag(tag["name"], tag["color"]) for tag in data["properties"]["tags"]["multi_select"]]
        self.slug = data["properties"]["slug"]["rich_text"][0]["plain_text"] if data["properties"]["slug"]["rich_text"] else ""
        self.status = data["properties"]["status"]["status"]["name"]
        self.publish_date = (
            datetime.strptime(data["properties"]["publish_date"]["date"]["start"], "%Y-%m-%d") if data["properties"]["publish_date"]["date"] else None
        )
        self.title = data["properties"]["title"]["title"][0]["plain_text"] if data["properties"]["title"]["title"] else ""
        self.blocks = Block.get_children(self.id)


class Block:
    def __init__(self, data: dict[str, Any]):
        self.id = data["id"]
        self.has_children = data["has_children"]
        self.type = data["type"]
        self.children = Block.get_children(self.id) if self.has_children else None
        self.content: BlockContent | None = None

    @classmethod
    def get_children(cls, id: str):
        res = requests.get(BASE_URL + "blocks/" + id + "/children", headers=HEADERS)
        return [cls(data) for data in res.json()["results"]]


class BlockContent:
    def __init__(self, data: dict[str, Any]) -> None:
        self.type = data["type"]


class RichText:
    def __init__(self, data: dict[str, Any]) -> None:
        self.type = data["type"]

class RichTextText(RichText):
    def __init__(self, data: dict[str, Any]) -> None:
        super().__init__(data)
        self.text = data["text"]["content"]

pages = [Page(page) for page in res.json()["results"]]
print(pages)
