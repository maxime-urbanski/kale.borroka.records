FROM node:14-alpine

RUN mkdir /front
WORKDIR /front

COPY ./public ./public
COPY ./src ./src
COPY ./package.json ./package.json

RUN npm i
CMD npm start

