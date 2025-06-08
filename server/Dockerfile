FROM node:22.14.0-slim AS base

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /app
# Copy the entire monorepo
COPY --link ../.. .
# Enable corepack and use Yarn 4
RUN corepack enable && corepack prepare yarn@4.9.1 --activate && yarn --version
# Focus only the server workspace and its dependencies
RUN yarn workspaces focus --all --production server

# Stage 2: Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app /app
RUN corepack enable && corepack prepare yarn@4.9.1 --activate && cd server && yarn build

# Stage 3: Production server
FROM base AS runner
WORKDIR /app
COPY --from=builder /app /app
ENV NODE_ENV=production

# Start the server
EXPOSE 8000
CMD ["yarn", "workspace", "server", "serve"] 