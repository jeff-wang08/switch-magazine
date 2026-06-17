# Switch Magazine App (Scaffold)

## Run locally
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start dev server:
   ```bash
   pnpm dev
   ```
3. Open `http://localhost:3000`.

## Notes
- This scaffold includes homepage sections and an `/apply` page shell.
- Next steps: connect Supabase for lead storage and add CMS content from Sanity.

## Supabase lead capture setup
1. In Supabase SQL editor, run `app/docs/supabase.sql`.
2. Copy `.env.example` to `.env.local` and fill values.
3. Keep `SUPABASE_SERVICE_ROLE_KEY` server-only (never expose in browser code).
4. Submit the `/apply` form to verify inserts in `public.leads`.

