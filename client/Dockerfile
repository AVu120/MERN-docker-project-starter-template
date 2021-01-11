# Use a lighter version of Node as a parent image
FROM node:15.1-alpine

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm i

EXPOSE 3000

CMD ["npm", "start"]