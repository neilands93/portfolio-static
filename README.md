# Cane Portfolio

A typographic, neo-brutalist personal portfolio website built with **Next.js**, **Tailwind CSS**, and **TypeScript**.

## Features

- **Day/Night Mode:** A global toggle that switches not just the color theme, but the content itself.
  - **Day Mode:** Professional "Work" portfolio (AI Facilitation & Adoption). High contrast, black-on-white.
  - **Night Mode:** Creative "Experiments" portfolio (Generative Art & Code). Neon green-on-black, terminal style.
- **Static Export:** Configured for easy hosting on GitHub Pages, Netlify, or Vercel.
- **Responsive:** Fully responsive grid and masonry layouts.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production (Static Export)

This project is configured for static export (`output: 'export'`), making it compatible with GitHub Pages.

1.  **Build the project:**
    ```bash
    npm run build
    ```
    This will generate a static version of your site in the `out/` directory.

2.  **Deploying to GitHub Pages:**
    - Push the contents of the `out/` directory to your hosting branch (e.g., `gh-pages`), or configure your CI/CD pipeline to build and publish the `out/` folder.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (Icons)
