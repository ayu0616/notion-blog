import os

from fastapi import APIRouter
from fastapi.responses import FileResponse

DIRNAME = os.path.dirname(__file__)

router = APIRouter()


@router.get("/files/{path:path}", response_class=FileResponse)
async def get_file(path: str):
    return FileResponse(os.path.join(DIRNAME, "../../", path))
