import os

from fastapi import APIRouter
from fastapi.responses import FileResponse, Response

from db.s3 import get_file

DIRNAME = os.path.dirname(__file__)

router = APIRouter()


@router.get("/images/{path:path}", response_class=FileResponse)
async def get_image(path: str):
    img = get_file(path)
    if img is None:
        return Response(status_code=404)
    return Response(content=img, media_type="image/webp")