## Ark Invoice 
Ark Invoice is a feature-rich SaaS platform designed to simplify invoice management. With a focus on seamless usability, robust functionality, and beautiful design, Ark Invoice empowers users to create, edit, track, and send invoices effortlessly.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First, clone the repository and install dependencies:

git clone https://github.com/yourusername/ark-invoice.git  
cd ark-invoice  
npm install  

Then, run the development server:

npm run dev  
or
yarn dev  
or
pnpm dev  
or
bun dev  

Open http://localhost:3000 with your browser to see the result.

## Environment Variables

Create a .env file in the root directory and add the following variables:

DATABASE_URL=<Your Neon Postgres Database URL>  
NEXTAUTH_SECRET=<Your NextAuth Secret>  
MAILTRAP_USER=<Your Mailtrap Username>  
MAILTRAP_PASS=<Your Mailtrap Password>  

## Features

	•	Built with Next.js App Router for smooth navigation.
	•	Custom authentication with Magic Link support via Mailtrap.
	•	Real-time custom PDF generation for invoices.
	•	Interactive dashboard with animated charts.
	•	Email integration powered by Mailtrap for professional invoice templates.
	•	Backed by Neon Postgres Database and managed with Prisma ORM.
	•	Styled with TailwindCSS and Shadcn UI for a modern design.
	•	Deployed seamlessly on Vercel.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:
	•	Next.js Documentation - Learn about Next.js features and API.
	•	Mailtrap Documentation - Explore Mailtrap’s API for sending emails.
	•	Prisma Documentation - Learn about Prisma ORM and database management.
	•	TailwindCSS Documentation - Understand how to style your project effectively.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🙌 Special Thanks

A big thanks to everyone who supported this project. Contributions and feedback are always welcome—let’s build something amazing together!
