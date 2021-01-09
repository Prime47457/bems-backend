FROM node:alpine

WORKDIR /app

COPY ./package.json ./yarn.lock ./tsconfig.json ./

RUN yarn install

ADD . /app

EXPOSE 3000

CMD yarn run start