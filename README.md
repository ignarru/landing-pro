# Landing Pro

This project uses [Supabase](https://supabase.com) to store the contact form submissions.

## Environment variables

Create a `.env` file in the project root (this file is ignored by Git) or set these variables in your deployment service:

```bash
SUPABASE_URL=<your-supabase-url>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

The client sends contact requests to `/api/contact` and the server inserts them into Supabase using these credentials.
