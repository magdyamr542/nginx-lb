FROM node:16-alpine

WORKDIR /code

COPY package*.json ./

RUN npm i

COPY . .

CMD npm start
