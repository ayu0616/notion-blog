from fastapi import FastAPI

from .routers import file, page

app = FastAPI()

app.include_router(page.router)
app.include_router(file.router)
