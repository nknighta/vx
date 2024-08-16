FROM node:alpine

WORKDIR /app

RUN apk add --no-cache git

RUN git clone https://github.com/nknighta/vx .

RUN npm install

CMD ["npm", "run", "start"]