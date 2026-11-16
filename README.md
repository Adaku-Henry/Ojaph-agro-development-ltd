# Ojaph-agro-development-ltd

## Environment variables

The current site is static and does not require environment variables to build or deploy.
`.env.example` documents the Supabase client values needed when the planned CMS is connected:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

After creating a Supabase project, copy `.env.example` to `.env.local` and replace the example values with the project's URL and publishable key. Add the same variables to the hosting provider's environment settings before deploying the CMS-enabled site.

Vite exposes variables prefixed with `VITE_` in browser code. Never put a Supabase secret or `service_role` key in a `VITE_` variable or commit it to the repository. Protect database access with Supabase Row Level Security policies.

## SEO

Page titles, descriptions, canonical URLs and social metadata are maintained in `seo.config.json`. The build creates route-specific HTML files and the public `sitemap.xml` and `robots.txt` use `https://ojaphagrodevelopment.org`. Update these when the production domain or public routes change.
