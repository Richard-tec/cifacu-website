create extension if not exists pgcrypto;

create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  national_id_hash text not null unique,
  national_id_last4 text not null,
  phone text not null,
  email text not null,
  district text not null,
  profession text not null,
  citizenship_status text not null,
  gender text not null,
  date_of_birth date not null,
  pledge_agreed boolean not null default false,
  pledge_agreed_at timestamptz,
  digital_signature text not null,
  registration_status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint members_pledge_required check (pledge_agreed = true),
  constraint members_registration_status_check check (
    registration_status in ('pending', 'approved', 'rejected')
  )
);

create index if not exists members_created_at_idx on public.members (created_at desc);
create index if not exists members_registration_status_idx
  on public.members (registration_status);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists members_set_updated_at on public.members;

create trigger members_set_updated_at
before update on public.members
for each row
execute function public.set_updated_at();

alter table public.members enable row level security;

drop policy if exists "Service role can manage members" on public.members;

create policy "Service role can manage members"
on public.members
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');
