FROM node:alpine

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
