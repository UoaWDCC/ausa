# syntax = docker/dockerfile:1
FROM debian:stable-slim as base

LABEL fly_launch_runtime="Node.js"

WORKDIR /app

# Step 1: Install volta to setup Nodejs
RUN apt-get update \
    && apt-get install -y \
    curl \
    ca-certificates \
    --no-install-recommends

SHELL ["/bin/bash", "-c"]
ENV BASH_ENV ~/.bashrc
ENV VOLTA_HOME /root/.volta
ENV PATH $VOLTA_HOME/bin:$PATH
RUN curl https://get.volta.sh | bash
RUN volta install node

# Step 2: Install packages
FROM base as install
COPY --link package.json yarn.lock .yarnrc.yml tsconfig.json ./
COPY --link ./server ./server
RUN yarn workspaces focus server

# Step 3: Build and serve
FROM base as build
COPY --from=install /app /app
RUN yarn workspace server build

FROM base
COPY --from=build /app /app
EXPOSE 8000
CMD [ "yarn", "workspace", "server", "serve" ]
