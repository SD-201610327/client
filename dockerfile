FROM node:14-alpine

WORKDIR /usr/app/client
RUN npm install

COPY . .
RUN npm install -g

EXPOSE 3001

