from fastapi import APIRouter

from ..schemas import block as block_schema
from ..schemas import page as page_schema

router = APIRouter()


@router.get("/pages", response_model=list[page_schema.PageInfo])
async def get_pages():
    return [
        page_schema.PageInfo(
            id="1",
            title="Test Page",
            last_edited_time="2021-10-19T14:58:00.000Z",
            slug="test-page",
            status="published",
            publish_date="2021-10-19T14:58:00.000Z",
            image="hogehoge://hoge.hoge",
            description="This is a test page",
            tags=[
                page_schema.Tag(name="test", color="blue"),
                page_schema.Tag(name="test2", color="red"),
            ],
        )
    ]


@router.get("/pages/{slug}", response_model=page_schema.Page)
async def get_page(slug: str):
    return page_schema.Page(
        id=slug,
        title="Test Page",
        last_edited_time="2021-10-19T14:58:00.000Z",
        slug="test-page",
        status="published",
        publish_date="2021-10-19T14:58:00.000Z",
        image="hogehoge://hoge.hoge",
        description="This is a test page",
        tags=[
            page_schema.Tag(name="test", color="blue"),
            page_schema.Tag(name="test2", color="red"),
        ],
        blocks=[
            block_schema.Image(
                id="1",
                has_children=False,
                type="image",
                children=None,
                url="https://example.com/image.png",
                caption=[],
            ),
            block_schema.Embed(
                id="2",
                has_children=False,
                type="embed",
                children=None,
                url="https://example.com/embed",
            ),
        ],
    )
