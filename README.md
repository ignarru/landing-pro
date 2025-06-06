# Landing Pro

This project uses [Supabase](https://supabase.com) to store the contact form submissions.

## Environment variables

Copy `.env.example` to `.env` (this file is ignored by Git) and fill in your Supabase credentials, or set these variables in your deployment service:

```bash
cp .env.example .env
```

Then edit `.env` and set:

```bash
SUPABASE_URL=<your-supabase-url>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

The client sends contact requests to `/api/contact` and the server inserts them into Supabase using these credentials.
