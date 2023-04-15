FROM node:alpine

WORKDIR /usr/accounts

COPY . .

RUN yarn

EXPOSE 3000

CMD [ "yarn", "dev" ]