# TODO - GitHub + Vercel (Frontend + Backend) deployment

## Step 1: Fix backend for Vercel serverless
- [ ] Create Vercel serverless handlers under `backend/api/*` (login/signup/health)
- [ ] Remove reliance on `server.js`/Express listening for deployment
- [ ] Fix signup/login logic (proper password handling + responses)
- [ ] Add centralized config for CORS using `VITE_API_URL`/`FRONTEND_URL` env vars

## Step 2: Fix frontend API URLs
- [x] Update `login.jsx` and `signup.jsx` to use `import.meta.env.VITE_API_URL`

- [ ] Add `.env.example` in `frontend/frontend`

## Step 3: Ensure Vite SPA works on Vercel
- [ ] Add `vercel.json` rewrite for SPA routing (fallback to `/index.html`)

## Step 4: GitHub readiness
- [ ] Add/adjust root README with deploy steps
- [ ] Ensure both apps have correct `.gitignore`

## Step 5: Test builds locally before pushing
- [ ] Run `npm ci && npm run build` for frontend
- [ ] Run backend handlers locally (or simple node checks)


