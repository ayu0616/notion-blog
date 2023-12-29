import json
import os

from fastapi import APIRouter
from fastapi.responses import JSONResponse

from ..schemas import error as error_schema
from ..schemas import page as page_schema

router = APIRouter()
cur_dir = os.path.dirname(__file__)


@router.get("/pages", response_model=list[page_schema.PageInfo])
async def get_pages():
    with open(os.path.join(cur_dir, "../../data/pages.json"), "r") as f:
        pages = json.load(f)
    return pages


@router.get("/pages/{slug}", response_model=page_schema.Page, responses={404: {"model": error_schema.Error}})
async def get_page(slug: str):
    data_path = os.path.join(cur_dir, "../../data/pages", slug, "data.json")
    is_exist = os.path.exists(data_path)
    if not is_exist:
        return JSONResponse(status_code=404, content={"message": "Page not found"})
    with open(data_path, "r") as f:
        page = json.load(f)
    return page
