create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  city text not null,
  trade_interest text not null,
  funding_interest text not null,
  employment_status text not null,
  consent boolean not null default false,
  consent_timestamp timestamptz,
  source text,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

-- App server writes with SERVICE ROLE key via /api/leads route.
-- Optional: read policy for authenticated dashboards.
create policy "Allow authenticated read leads"
on public.leads
for select
using (auth.role() = 'authenticated');
