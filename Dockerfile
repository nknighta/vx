FROM docker.io/node:lts-alpine

ENV PORT=3000
ENV HOST=0.0.0.0

RUN mkdir /source-code

WORKDIR /source-code

RUN git clone https://github.com/nknighta/vx.git .

RUN npm install

RUN npm --prefix varius.dev --omit=dev -f install

CMD [ "node", "varius.dev" ]