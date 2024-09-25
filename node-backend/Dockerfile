FROM node:20-alpine3.19

WORKDIR /usr/src/app/node_consumer

COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]

