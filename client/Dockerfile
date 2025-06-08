FROM node:22.14.0-slim AS base

# Stage 1: Install dependencies and build
FROM base AS builder
WORKDIR /app
COPY --link ../.. .
RUN corepack enable && corepack prepare yarn@4.9.1 --activate && yarn --version
RUN yarn workspaces focus --all --production client
RUN yarn workspace client build

# Stage 2: Production image
FROM node:22.14.0-slim AS runner
WORKDIR /app/client
COPY --from=builder /app/client/.next .next
COPY --from=builder /app/client/public public
COPY --from=builder /app/client/package.json package.json
COPY --from=builder /app/client/next.config.ts next.config.ts
COPY --from=builder /app/.yarn .yarn
COPY --from=builder /app/.pnp.* /app/
COPY --from=builder /app/yarn.lock /app/
ENV NODE_ENV=production
EXPOSE 3000
CMD ["yarn", "start"] 