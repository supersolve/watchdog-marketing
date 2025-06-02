This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Email Configuration

This project uses [Resend](https://resend.com) for email notifications when demo requests are submitted.

### Setup

1. **Get a Resend API Key:**

   - Sign up at [resend.com](https://resend.com)
   - Go to [API Keys](https://resend.com/api-keys) and create a new API key
   - Copy the API key

2. **Configure Environment Variables:**

   - Create a `.env.local` file in the root directory
   - Add your Resend API key:

   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

3. **Domain Setup (Production):**
   - For production, you'll need to verify your domain with Resend
   - Update the `from` field in `/src/app/api/demo-request/route.ts` to use your verified domain

### Demo Request Flow

When users submit the demo request form:

- Form data is sent to `/api/demo-request`
- An email notification is sent to `demo@supersolve.ai`
- The email includes company name, email address, and submission timestamp

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
