from typing import Literal, Optional

from pydantic import BaseModel

BlockType = Literal[
    "bookmark",
    "breadcrumb",
    "bulleted_list",
    "bulleted_list_item",
    "callout",
    "child_database",
    "child_page",
    "code",
    "column",
    "column_list",
    "divider",
    "embed",
    "equation",
    "file",
    "heading_1",
    "heading_2",
    "heading_3",
    "image",
    "link_preview",
    "link_to_page",
    "numbered_list",
    "numbered_list_item",
    "paragraph",
    "pdf",
    "quote",
    "synced_block",
    "table",
    "table_of_contents",
    "table_row",
    "template",
    "to_do",
    "toggle",
    "unsupported",
    "video",
]


class BlockBase(BaseModel):
    id: str
    hasChildren: bool
    type: str
    children: Optional[list["BlockBase"]]


Color = Literal[
    "blue",
    "blue_background",
    "brown",
    "brown_background",
    "default",
    "gray",
    "gray_background",
    "green",
    "green_background",
    "orange",
    "orange_background",
    "pink",
    "pink_background",
    "purple",
    "purple_background",
    "red",
    "red_background",
    "yellow",
    "yellow_background",
]


class Annotations(BaseModel):
    bold: bool
    italic: bool
    strikethrough: bool
    underline: bool
    code: bool
    color: Color


class RichText(BaseModel):
    type: Literal["text", "mention", "equation"]
    text: str
    href: Optional[str]
    annotations: Annotations


class RichTextBlockBase(BlockBase):
    richTexts: list[RichText]
    color: Color


class WithCaptionBlockBase(BlockBase):
    caption: list[RichText]


class Paragraph(RichTextBlockBase):
    type: Literal["paragraph"]


class HeadingBlockBase(RichTextBlockBase):
    type: Literal["heading_1", "heading_2", "heading_3"]
    isToggleable: bool


class Heading1(HeadingBlockBase):
    type: Literal["heading_1"]


class Heading2(HeadingBlockBase):
    type: Literal["heading_2"]


class Heading3(HeadingBlockBase):
    type: Literal["heading_3"]


class BulletedListItem(RichTextBlockBase):
    type: Literal["bulleted_list_item"]


class BulletedList(WithCaptionBlockBase):
    type: Literal["bulleted_list"]
    listItems: list[BulletedListItem]


class NumberedListItem(RichTextBlockBase):
    type: Literal["numbered_list_item"]


class NumberedList(WithCaptionBlockBase):
    type: Literal["numbered_list"]
    listItems: list[NumberedListItem]


class Bookmark(WithCaptionBlockBase):
    type: Literal["bookmark"]
    url: str


class Code(WithCaptionBlockBase):
    type: Literal["code"]
    richTexts: list[RichText]
    language: str


class Equation(BlockBase):
    type: Literal["equation"]
    expression: str


class Callout(RichTextBlockBase):
    type: Literal["callout"]
    icon: str


class Divider(BlockBase):
    type: Literal["divider"]


class Image(WithCaptionBlockBase):
    type: Literal["image"]
    url: str


class Video(WithCaptionBlockBase):
    type: Literal["video"]
    url: str


class TableOfContents(BlockBase):
    type: Literal["table_of_contents"]


class TableRow(BlockBase):
    type: Literal["table_row"]
    cells: list[list[RichText]]


class Table(BlockBase):
    type: Literal["table"]
    hasColumnHeader: bool
    hasRowHeader: bool


class Column(BlockBase):
    type: Literal["column"]


class ColumnList(BlockBase):
    type: Literal["column_list"]


class SyncedBlock(BlockBase):
    type: Literal["synced_block"]


class Embed(BlockBase):
    type: Literal["embed"]
    url: str


# flake8: noqa: W503
Block = (
    Paragraph
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
    | Embed
)
