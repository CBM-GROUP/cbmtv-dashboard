Prepare and deploy to Vercel

1) Overview
- This Next.js app is ready for Vercel deployment. The repository now excludes Docker and local infra via `.vercelignore` and includes a minimal `vercel.json`.

2) Before you deploy (recommended)
- Ensure you have removed `prisma/` and any `@prisma/client` references (already done).
- Confirm `.env.example` contains the required variables. Do NOT commit real secrets.

3) Required environment variables (set these in Vercel Project Settings -> Environment Variables)
- NEXT_PUBLIC_API_BASE_URL
- NEXT_PUBLIC_MEILISEARCH_URL
- NEXT_PUBLIC_MEILISEARCH_API_KEY
- NEXT_PUBLIC_GOOGLE_CLIENT_ID
- MUX_TOKEN_ID
- MUX_TOKEN_SECRET
- (Optional) SKIP_DB_SEED=true — keeps the app from attempting any DB seed/migrate at runtime

4) Deploy steps (quick)
- Push your branch to GitHub/GitLab (connected to Vercel).
- In Vercel, "New Project" -> import your repository.
- For Build & Output settings:
  - Framework Preset: Next.js
  - Install Command: `pnpm install --frozen-lockfile`
  - Build Command: `pnpm build`
  - Output Directory: (leave blank for Next.js)
- Add the environment variables listed above in "Environment Variables" (Preview/Production as appropriate).
- Deploy.

5) Local verification (before presentation)
- Run locally using `pnpm install` then `pnpm build && pnpm start`.
- Or run in dev mode: `pnpm dev`.

6) Notes
- Vercel handles serverless functions and Next.js routing; there is no container-based DB on Vercel. The app should use `NEXT_PUBLIC_API_BASE_URL` to proxy API calls to your CBMTV backend.
- If you need to run a custom server or rely on long-lived DB connections, host those parts (backend) elsewhere and point `NEXT_PUBLIC_API_BASE_URL` at that service.

7) Troubleshooting
- If the deployed app still tries to seed or run Prisma: ensure `@prisma/client` and `prisma` are removed from `package.json`, and that your project on Vercel is using the latest commit.
- If assets are large or upload times are long, add additional ignore rules to `.vercelignore`.
