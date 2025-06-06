# Landing Pro

This project uses [Supabase](https://supabase.com) to store the contact form submissions.

## Environment variables

Copy `.env.example` to `.env` (this file is ignored by Git) and fill in your Supabase credentials, or set these variables in your deployment service. The example file only contains placeholders, so your deployment environment must provide actual credentials:


```bash
cp .env.example .env
```

Then edit `.env` and set:

```bash
SUPABASE_URL=<your-supabase-url>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

The client sends contact requests to `/api/contact` and the server inserts them into Supabase using these credentials.

## Start the server

Run the development server with:

```bash
npm run start
```

## About section

A personal "Acerca de mí" section appears before the services listing. You can edit the content in `client/src/components/About.tsx` and replace the photo at `client/public/profile.png`.

