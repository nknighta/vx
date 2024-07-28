# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build varius.dev`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t varius.dev`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system varius.dev && \
          adduser --system -G varius.dev varius.dev

COPY dist/varius.dev varius.dev/
RUN chown -R varius.dev:varius.dev .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix varius.dev --omit=dev -f install

CMD [ "node", "varius.dev" ]
