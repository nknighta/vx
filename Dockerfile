FROM docker.io/node:lts-alpine

ENV PORT=3000
ENV HOST=0.0.0.0

WORKDIR .

COPY package.json .

RUN npm install

COPY src/ src/
COPY public/ public/
COPY prisma/ prisma/
COPY vx-app/ vx-app/
COPY nx.json nx.json
COPY project.json project.json
COPY tsconfig.json tsconfig.json
