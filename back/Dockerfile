FROM node:14-alpine

RUN mkdir /back
WORKDIR /back
COPY package.json ./
RUN yarn install

COPY ./http ./http
COPY ./models ./models
COPY ./routes ./routes
COPY index.js router.js SequelizeAssociation.js SequelizeConnexion.js .env ./

CMD ["yarn", "start"]
