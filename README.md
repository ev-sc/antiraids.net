# antiraids.net

A decentralised network sharing info and tools to resist UK immigration raids, promoting solidarity, anti-racism, freedom of movement, and DIY community action.

## About

This site provides practical guidance, resources, and contacts for communities organizing against immigration raids in the UK. It prioritizes community-led action, mutual support, and accessible information.

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Biome
- Payload CMS
- PostgreSQL

## Content Management

This project uses Payload CMS for content management. The admin panel is accessible at `/admin` once the development server is running.

### Collections

- **Users** - Authentication and user management
- **Media** - File uploads and media management

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Payload Secret (generate with: openssl rand -base64 32)
PAYLOAD_SECRET=your-secret-key-here

# Database Connection
DATABASE_URL=postgresql://user:password@localhost:5432/antiraids

```

See `.env.example` for a template.

## Scripts

### Development

- `pnpm dev` - Run the dev server
- `pnpm build` - Build for production
- `pnpm start` - Run the production server

### Code Quality

- `pnpm check` - Lint/format checks via Biome
- `pnpm fix` - Apply Biome fixes

### Payload CMS

- `pnpm payload migrate:create` - Create database migrations
- `pnpm payload migrate` - Run database migrations
- `pnpm payload generate:types` - Generate TypeScript types from collections

## Getting started

1. Install dependencies: `pnpm install`
2. Set up your environment variables:
   - Copy `.env.example` to `.env`
   - Generate a secure `PAYLOAD_SECRET`: `openssl rand -base64 32`
   - Configure your `DATABASE_URL` with PostgreSQL connection string
3. Set up the database:
   - Create a PostgreSQL database
   - Run migrations: `pnpm payload migrate:create`
4. Start development: `pnpm dev`
5. Access the admin panel at `http://localhost:3000/admin`

## Project Structure

```
app/
├── (frontend)/      # Public-facing website pages
└── (payload)/       # Payload CMS admin and API routes
    ├── admin/       # Admin panel UI
    └── api/         # REST and GraphQL APIs
collections/         # Payload collection configurations
```
