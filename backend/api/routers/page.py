import json
import os
from functools import lru_cache

from fastapi import APIRouter
from fastapi.responses import JSONResponse

from db.s3 import get_file

from ..schemas import error as error_schema
from ..schemas import page as page_schema

router = APIRouter()
cur_dir = os.path.dirname(__file__)


@lru_cache
@router.get("/pages", response_model=list[page_schema.PageInfo])
async def get_pages():
    s = get_file("data/pages.json")
    if s is None:
        return JSONResponse(status_code=404, content={"message": "Page not found"})
    pages = json.loads(s)
    return pages


@lru_cache
@router.get("/pages/{slug}", response_model=page_schema.Page, responses={404: {"model": error_schema.Error}})
async def get_page(slug: str):
    s = get_file(f"data/pages/{slug}/data.json")
    if s is None:
        return JSONResponse(status_code=404, content={"message": "Page not found"})
    page = json.loads(s)
    return page
