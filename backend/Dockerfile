# Stage 1: ブログデータを取得してくる
FROM node:18-alpine as node

WORKDIR /app/get-pages

COPY get-pages/package.json ./
RUN npm install && npm install -g typescript

COPY ./get-pages ./

RUN tsc && node dist/main.js

# Stage 2: Build Python application
FROM python:3.10-buster
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN pip install poetry

COPY pyproject.toml* poetry.lock* ./

RUN poetry config virtualenvs.in-project true
RUN if [ -f pyproject.toml ]; then poetry install --no-root; fi

COPY . .
COPY --from=node /app/data ./data

EXPOSE 8000

ENTRYPOINT ["poetry", "run", "uvicorn", "api.main:app", "--host", "0.0.0.0", "--reload"]
