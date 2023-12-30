import os

from fastapi import APIRouter
from fastapi.responses import JSONResponse

from db.query import query

from ..schemas import error as error_schema
from ..schemas import page as page_schema

router = APIRouter()
cur_dir = os.path.dirname(__file__)


@router.get("/pages", response_model=list[page_schema.PageInfo])
async def get_pages():
    pages_data = query("pages")
    pages = pages_data["data"]
    return pages


@router.get("/pages/{slug}", response_model=page_schema.Page, responses={404: {"model": error_schema.Error}})
async def get_page(slug: str):
    page = query(slug)
    if page is None:
        return JSONResponse(status_code=404, content={"message": "Page not found"})
    return page
