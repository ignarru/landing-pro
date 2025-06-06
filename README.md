# Landing Pro

This project uses [Supabase](https://supabase.com) to store the contact form submissions.

## Environment variables

Create a `.env` file in the project root (this file is ignored by Git) or set these variables in your deployment service:

```bash
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

After adding these variables, restart the development server so Vite can load them.
