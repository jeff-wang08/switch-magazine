# Switch Magazine: Build + Launch Plan

## 1) Organize your Mac for speed (day 0)

Use one clean workspace so you can move quickly without hunting for files.

```text
~/Work/
  switch-magazine/
    app/                  # Next.js app
    packages/
    docs/
    infra/
    scripts/
    assets/
```

### Suggested machine setup
1. Install **Homebrew**.
2. Install tools: `git`, `node` (via `nvm`), `pnpm`, `vercel`, `supabase`, `sanity`.
3. Use one terminal profile just for this project.
4. Turn on iCloud/Desktop sync only for docs, not `node_modules`.
5. Use 1Password (or equivalent) for API keys and a local `.env.local` for development.

### Folder hygiene rules
- Keep strategy docs in `/docs`.
- Keep schema and migrations in `/infra`.
- Keep one command-based setup in `/scripts`.
- Never store secrets in git.

---

## 2) Build order (what to do first)

### Phase A: Foundation (days 1–3)
- Initialize Next.js with TypeScript + Tailwind.
- Set global design tokens (newspaper + marketplace style).
- Implement core layout:
  - header nav
  - footer
  - homepage hero with search
- Set up Supabase project and baseline tables:
  - `programs`, `schools`, `employers`, `leads`.

### Phase B: Revenue-critical pages (days 4–10)
Build in this exact order:
1. Homepage
2. Program page template
3. Apply page (lead capture)
4. For Students
5. For Employers
6. For Schools
7. City + Trade templates

Reason: this gives you lead capture and partner pages early.

### Phase C: Distribution + trust (days 11–20)
- Add editorial guides from Sanity.
- Add trust/metrics section (schools, employers, cities, programs).
- Add basic SEO schema (Organization, WebSite, FAQ, Article, JobPosting where relevant).
- Add internal linking blocks on every page.

### Phase D: Monetization ops (days 21–30)
- Pipe all form leads into HubSpot.
- Trigger follow-up email via Resend.
- Add admin status tags for lead quality.
- Add featured listings slots (schools/employers can pay).

---

## 3) Information architecture (MVP)

Top navigation:
- Programs
- Cities
- Hiring Now
- Salaries
- For Students
- For Employers
- For Schools
- Guides
- Search

Homepage sections:
1. Hero with search + CTAs
2. Today's opportunities listings
3. Browse by trade
4. Browse by city
5. Split section (students/employers/schools)
6. Editorial guides
7. Trust section
8. Footer

---

## 4) Data model (starting point)

### Programs
- id
- trade
- city
- salary_range
- duration
- funding_available
- hiring_partners
- school_id

### Schools
- id
- name
- city
- programs
- website
- contact_name
- contact_email
- partnership_status

### Employers
- id
- company_name
- city
- trade
- hiring
- contact_name
- contact_email

### Leads
- id
- name
- email
- phone
- city
- trade_interest
- funding_interest
- employment_status

---

## 5) Monetization model (cash-flow focused)

Primary offers:
1. **Qualified student leads** sold to partner schools.
2. **Employer partner packages** (job slots + candidate visibility).
3. **Featured school/program listings** in city/trade pages.
4. **Sponsored guides** (clearly labeled).

Guardrails to protect long-term revenue:
- Be transparent about partner relationships and sponsorships.
- Verify school accreditation and outcomes before listing as "featured".
- Keep data consent explicit on every form.

---

## 6) Compliance + trust checklist

Before paid traffic:
- Publish Privacy Policy, Terms, and Lead Consent text.
- Add TCPA-safe consent language if collecting phone numbers.
- Add "How we make money" disclosure page.
- Confirm CAN-SPAM compliant email flows.
- Log lead source + consent timestamp.

---

## 7) Weekly operating cadence (lean team)

### Monday
- Publish one city page + one trade page.

### Tuesday
- Outreach 20 schools + 20 employers for partnerships.

### Wednesday
- Publish one guide article (high-intent keyword).

### Thursday
- Improve conversion on hero/search/apply forms.

### Friday
- Review funnel metrics:
  - sessions
  - form starts
  - form submits
  - qualified leads
  - cost per qualified lead

---

## 8) First KPI targets (first 60 days)

- 50 indexed pages (cities + trades + programs + guides)
- 10 partner schools
- 5 partner employers
- 100+ leads captured
- 20+ qualified leads sold

---

## 9) Immediate next commands (when code starts)

```bash
pnpm create next-app@latest app --typescript --tailwind --eslint --app
cd app
pnpm add @supabase/supabase-js zod react-hook-form
pnpm add @sanity/client @sanity/image-url
pnpm add resend @hubspot/api-client
pnpm add -D prettier
```

Then wire environment variables and deploy preview to Vercel on day 1.
