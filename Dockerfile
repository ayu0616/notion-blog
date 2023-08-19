FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./app/package*.json ./

RUN npm install

# Bundle app source
COPY ./app .

# Build app
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
