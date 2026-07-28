##############################
# 1. Build Stage
##############################
FROM node:22-alpine AS builder

WORKDIR /app

# Enable PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependency files
COPY package.json pnpm-lock.yaml .npmrc* ./
COPY prisma ./prisma/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy app source code
COPY . .

# Build-time environment variables from Dokploy
ARG NEXT_PUBLIC_MEILISEARCH_URL
ARG NEXT_PUBLIC_MEILISEARCH_API_KEY
ARG NEXT_PUBLIC_API_BASE_URL
ARG NEXT_PUBLIC_GOOGLE_CLIENT_ID
ARG MUX_TOKEN_ID
ARG MUX_TOKEN_SECRET

ENV NEXT_PUBLIC_MEILISEARCH_URL=${NEXT_PUBLIC_MEILISEARCH_URL}
ENV NEXT_PUBLIC_MEILISEARCH_API_KEY=${NEXT_PUBLIC_MEILISEARCH_API_KEY}
ENV NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}
ENV NEXT_PUBLIC_GOOGLE_CLIENT_ID=${NEXT_PUBLIC_GOOGLE_CLIENT_ID}
ENV MUX_TOKEN_ID=${MUX_TOKEN_ID}
ENV MUX_TOKEN_SECRET=${MUX_TOKEN_SECRET}

# Build Next.js app (production)
RUN pnpm run build


##############################
# 2. Production Stage
##############################
FROM node:22-alpine AS runner

WORKDIR /app

# Enable PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy built app from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Runtime environment variables (Dokploy will inject actual values)
ENV NEXT_PUBLIC_MEILISEARCH_URL=${NEXT_PUBLIC_MEILISEARCH_URL}
ENV NEXT_PUBLIC_MEILISEARCH_API_KEY=${NEXT_PUBLIC_MEILISEARCH_API_KEY}
ENV NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}
ENV NEXT_PUBLIC_GOOGLE_CLIENT_ID=${NEXT_PUBLIC_GOOGLE_CLIENT_ID}
ENV MUX_TOKEN_ID=${MUX_TOKEN_ID}
ENV MUX_TOKEN_SECRET=${MUX_TOKEN_SECRET}

# Expose port
EXPOSE 3000

# Start Next.js server
CMD ["pnpm", "start"]
