#!/bin/sh
set -e

echo "🚀 Starting deployment script..."

# Generate Prisma Client just in case it's not generated in production stage
npx prisma generate

echo "📦 Pushing database schema (or applying migrations)..."
# We try to deploy migrations if they exist, otherwise we just push the schema automatically
if [ -d "./prisma/migrations" ]; then
  echo "Found migrations folder, deploying migrations..."
  npx prisma migrate deploy
else
  echo "No migrations folder found, pushing schema directly..."
  npx prisma db push --accept-data-loss
fi

echo "🌱 Seeding database..."
npx prisma db seed

echo "✨ Starting Next.js app..."
exec pnpm start
