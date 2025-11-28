🚀 Aura AI: Intelligence Layer for Code (Responsive Landing Page)

This project is a single-page responsive landing page for "Aura AI," a fictional AI-powered coding assistant, built as part of a Front-End Development assignment. It demonstrates proficiency in modern component-based architecture and utility-first CSS styling.

🔗 Live Demo

You can view the live, deployed version of the landing page here:

[Insert Your Vercel Deployment Link Here]

✨ Assignment Fulfillment

This project successfully implements all the requirements specified in the assignment prompt:

Requirement

Status

Details

Tech Stack

✅ COMPLETE

Built using Next.js and styled with Tailwind CSS.

UI Generation

✅ COMPLETE

UI components (Hero, Features, Pricing) were generated or inspired by Vercel v0 principles.

Responsiveness

✅ COMPLETE

Layout is fully responsive, optimized for mobile (small screens) and desktop (large screens).

Hero Section

✅ COMPLETE

Includes Heading, Subtext, and two Call-to-Action (CTA) buttons.

Features Section

✅ COMPLETE

Includes a minimum of 3 detailed features (Refactoring, Debugging, Language Support).

Optional Section

✅ COMPLETE

The Pricing Section was implemented as the required optional section.

Footer

✅ COMPLETE

A clean, functional footer is included at the bottom of the page.

🛠️ Tech Stack

Framework: Next.js (App Router structure)

Styling: Tailwind CSS (v4+)

Component Base: Vercel v0 (Used for initial UI generation and inspiration)

Icons: Lucide React

Utilities: clsx and tailwind-merge for clean class management.

💻 Local Development Setup

Follow these steps to clone and run the project on your local machine.

Prerequisites

You need to have Node.js (version 18+) installed.

Installation Steps

Clone the Repository:

git clone [Your Repository URL Here]
cd [your-project-folder-name]


Install Dependencies:
This project requires standard Next.js dependencies plus the essential utilities for the Vercel v0/shadcn component style:

npm install
# or
yarn install


Run the Development Server:

npm run dev
# or
yarn dev


View the App:
Open http://localhost:3000 in your browser to view the landing page.

(Note: The application uses Turbopack, which may take a few moments to start the first time.)

📄 Project Structure Summary

The entire landing page is consolidated into a single component for simplicity and adherence to the single-file concept demonstrated in the development process:

File

Purpose

app/page.js

Main Landing Page: Contains the Hero, Features, Pricing, and Footer components.

lib/utils.js

Utility: Exports the cn function (clsx + tailwind-merge).

tailwind.config.js

Tailwind CSS configuration file.

app/globals.css

Global styles, including Tailwind directives and custom variables.