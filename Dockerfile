# To use this Dockerfile, you have to set `output: 'standalone'` in your next.config.mjs file.
# From https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

FROM node:22.14.0-slim AS base

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /app
COPY --link package.json yarn.lock .yarnrc.yml tsconfig.json ./
COPY --link ./server ./server
RUN corepack enable yarn && yarn workspaces focus server

# Stage 2: Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=install /app /app
RUN corepack enable yarn && yarn workspace server build

# Stage 3: Production server
FROM base AS runner
WORKDIR /app
COPY --from=build /app /app
ENV NODE_ENV=production

# Start the server by default, this can be overwritten at runtime
EXPOSE 8000
CMD [ "yarn", "workspace", "server", "serve" ]
