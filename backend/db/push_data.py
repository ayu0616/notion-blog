import json
import os

from dynamodb import dynamodb
from settings import TABLE_NAME

table = dynamodb.Table(TABLE_NAME)


def put_item(slug: str):
    with open(os.path.join("data/pages", slug, "data.json")) as f:
        item_dict = json.load(f)
    item_dict["slug"] = slug

    table.put_item(Item=item_dict)


def put_pages():
    with open("data/pages.json") as f:
        pages = json.load(f)
    pages_data = {
        "slug": "pages",
        "data": pages,
    }
    table.put_item(Item=pages_data)


if __name__ == "__main__":
    for slug in os.listdir("data/pages"):
        put_item(slug)
    put_pages()
