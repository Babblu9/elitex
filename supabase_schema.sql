-- Create the leads table
create table public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  business_type text,
  business_stage text,
  primary_goal text,
  recommended_services text[], -- Array of strings
  lead_priority text,
  summary_for_team text,
  next_action text,
  raw_json jsonb -- Optional: store the full raw AI response
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;

-- Create policy to allow anonymous inserts (since the public website writes to it)
-- WARNING: For production, consider using a server-side only client (service_role) 
-- or edge function to protect this, but for this MVP, we allow public insert.
create policy "Allow public inserts"
on public.leads
for insert
to anon
with check (true);
