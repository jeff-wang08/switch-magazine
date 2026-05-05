# Switch Magazine: Next Step Checklist (Start Today)

If you want momentum **today**, do these in order.

## Step 1 (60 minutes): scaffold the app

```bash
pnpm create next-app@latest app --typescript --tailwind --eslint --app
cd app
pnpm dev
```

Success criteria:
- Local app runs on `http://localhost:3000`
- Repo has a real codebase (not docs-only)

## Step 2 (90 minutes): build the homepage shell

Create:
- top nav with: Programs, Cities, Hiring Now, Salaries, For Students, For Employers, For Schools, Guides, Search
- hero with two search fields (career + city)
- 3 CTA buttons: Find Programs, I'm Hiring, Partner With Us

Success criteria:
- One working homepage skeleton with real sections and clear CTAs.

## Step 3 (90 minutes): ship lead capture first

Create `/apply` page with:
- name, email, phone, city, trade_interest, funding_interest, employment_status
- submit button + consent checkbox
- thank-you screen

Success criteria:
- You can submit a lead end-to-end (even if temporarily stored locally).

## Step 4 (60 minutes): connect Supabase

- Create Supabase project
- Add `leads` table first
- Wire `/apply` form to insert into `leads`

Success criteria:
- A submitted form shows up in Supabase immediately.

## Step 5 (30 minutes): deploy preview to Vercel

- Push branch
- Import repo in Vercel
- Add required env vars

Success criteria:
- Public URL live so you can start outreach and feedback.

---

## 48-hour target

Within 2 days, you should have:
- Live homepage
- Live apply form
- Leads landing in Supabase
- A URL you can show to schools/employers

This is the minimum viable machine for cash flow.
