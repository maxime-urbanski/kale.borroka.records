FROM node:16-alpine

ENV YARN_VERSION 1.22.15

RUN apk add --no-cache --virtual .build-deps-yarn curl \
    && curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
    && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
    && rm yarn-v$YARN_VERSION.tar.gz \
    && apk del .build-deps-yarn

RUN mkdir /front
WORKDIR /front
COPY package.json ./
RUN yarn install

COPY ./pages ./pages
COPY ./src ./src
COPY ./public ./public
COPY ./styles ./styles
COPY .babelrc .eslintrc.js .prettierrc next.config.js tsconfig.json ./

CMD ["yarn", "dev"]
