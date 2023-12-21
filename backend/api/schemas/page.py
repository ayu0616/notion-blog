from typing import Literal, Optional

from pydantic import BaseModel

from .block import Block

TagColor = Literal["blue", "brown", "default", "gray", "green", "orange", "pink", "purple", "red", "yellow"]


class Tag(BaseModel):
    name: str
    color: TagColor


class PageInfo(BaseModel):
    """ページの情報を表すモデル

    - ページの内容については `Page` を参照
    """

    id: str
    title: str
    last_edited_time: str
    tags: list[Tag]
    slug: str
    status: str
    publish_date: Optional[str]
    image: Optional[str]
    description: str


class Page(PageInfo):
    """ページの内容を表すモデル

    - `Block`の情報も含まれている
    """

    blocks: list[Block]
