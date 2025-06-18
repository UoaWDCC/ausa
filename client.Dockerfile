# syntax = docker/dockerfile:1
FROM debian:stable-slim AS base

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
FROM base AS install
COPY --link package.json yarn.lock .yarnrc.yml tsconfig.json ./
COPY --link ./client ./client
RUN yarn workspaces focus client

# Step 3: Build the application
FROM base AS builder
COPY --from=install /app /app
RUN mkdir -p /app/client/public
RUN yarn workspace client build

# Stage 3: Production server
FROM base AS runner
WORKDIR /app
COPY --from=builder /app/client/.next/standalone ./
COPY --from=builder /app/client/.next/static ./client/.next/static
COPY --from=builder /app/client/public ./client/public
RUN ls ./
RUN ls ./.next
RUN ls ./client
EXPOSE 3000
CMD ["node", "client/server.js"]
