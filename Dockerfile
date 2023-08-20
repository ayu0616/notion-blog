FROM node:alpine

ARG _NOTION_API_KEY
ARG _NOTION_DATABASE_ID

ENV NOTION_API_KEY=${_NOTION_API_KEY}
ENV NOTION_DATABASE_ID=${_NOTION_DATABASE_ID}

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./app/package*.json ./

RUN npm install

# Bundle app source
COPY ./app .

# ページのデータをダウンロード
WORKDIR /usr/src/get-pages
COPY ./get-pages .
RUN npm install &&\
    npm install -g typescript &&\
    tsc &&\
    node ./dist/main.js
WORKDIR /usr/src
RUN rm -rf get-pages
WORKDIR /usr/src/app

# Build app
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
