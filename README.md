# Portfolio

My personal portfolio, presenting my background, skills and selected projects as I transition into web development.

**Live:** [www.anthonyquenet.com](https://www.anthonyquenet.com)

## Overview

A single-page site (About, Skills, Projects, Contact) with dedicated detail pages for each featured project, and a working contact form backed by a serverless function.

## Features

- Sticky sidebar navigation that highlights the current section while scrolling
- Scroll-triggered reveal animations, staggered by section, respecting `prefers-reduced-motion`
- Individual project pages under `/my-projects/`, linked from the homepage
- Contact form with client-side handling (loading state, success/error feedback) and a serverless backend
- Custom 404 page

## Technical details

- **Stack:** static HTML pages, Tailwind CSS, vanilla JavaScript (ES modules)
- **CSS build:** Tailwind CLI, compiling `src/input.css` into `src/output.css`
- **JavaScript architecture:** small, single-purpose modules (`animation.js`, `form.js`, `nav.js`) imported by a single entry point, `main.js`
- **Contact form backend:** a Vercel serverless function (`api/contact.js`) using the Resend API to send emails, with:
  - a honeypot field and per-IP rate limiting against spam
  - server-side validation (required fields, email format, input length)
  - CORS headers and explicit handling of `OPTIONS`/`POST` requests
- **Active section detection:** the nav highlights the current section using `getBoundingClientRect`, throttled with `requestAnimationFrame` on scroll and debounced on resize
- **Accessibility:** reveal animations disabled for users who prefer reduced motion, semantic sections with matching nav links, labelled form fields
- **SEO and sharing:** canonical URL, meta description, Open Graph and Twitter Card tags
- **Icons:** full favicon set and a web app manifest
- **Hosting:** Vercel, with the Resend API key stored as an environment variable

## Project structure

```
.
├── api/
│   └── contact.js            # serverless function, sends emails via Resend
├── assets/
│   ├── favicon/               # favicons and touch icons
│   ├── images/                # project screenshots (WebP)
│   └── js/
│       ├── components/
│       │   ├── animation.js   # scroll reveal animations
│       │   ├── form.js        # contact form submission handling
│       │   └── nav.js         # active section highlighting
│       └── main.js            # entry point, initializes the modules above
├── my-projects/
│   ├── mueizhli-eshop/
│   ├── mueizhli-landing-page/
│   ├── pepigo-kitchen/
│   ├── portfolio/
│   ├── revise/
│   └── VAT-calculator/        # one index.html per featured project
├── src/
│   ├── input.css              # Tailwind source
│   └── output.css             # compiled CSS (generated)
├── 404.html                   # custom error page
├── index.html                 # homepage
├── site.webmanifest           # web app manifest
├── package.json
└── vercel.json
```

## Featured projects

- **Quiz for students** — an interactive quiz built to practice JavaScript
- **Mueizhli — Landing page** — a temporary landing page explaining the closure of a former business
- **Pepigo Kitchen** — a showcase site for a shared professional kitchen, with a Netlify Forms contact form
- **VAT Calculator** — a static site built with a custom generator, to help French freelancers calculate VAT
- **Mueizhli — Shopify website** — a customized e-commerce site built on Shopify (now offline)

Each project has its own detail page linked from the homepage, with a longer write-up and the live link when applicable.

## Run locally

```bash
git clone https://github.com/Haynton/Portfolio.git
cd Portfolio
npm install
npm run dev
```

> Check `package.json` for the exact scripts available (building Tailwind, starting a local server).
> The contact form requires a `RESEND_API_KEY` environment variable and only works once deployed on Vercel.

## Deployment

The site is deployed on Vercel. The `RESEND_API_KEY` used by the contact form is stored as an environment variable in the Vercel project settings, not in the codebase.

## What I learned

- Structuring a multi-page static site with shared components and per-project detail pages
- Building and securing a serverless API endpoint: input validation, a honeypot, and per-IP rate limiting
- Sending transactional email with the Resend API
- Writing small, focused JavaScript modules with a clear entry point, instead of one large script
- Building accessible scroll animations that respect user motion preferences

## Author

Built by [Anthony Quenet](https://www.anthonyquenet.com) ([@Haynton](https://github.com/Haynton)).
