# Babai Chai

A responsive, single-page tea shop website built with React and Vite for Babai Chai in DLF Gachibowli.

## Features

- Responsive navigation with Home, Menu, About, Contact, and Cart links
- Reusable React components for the navbar, hero, about, menu, and footer sections
- Menu items rendered from data with product images, descriptions, and prices
- Functional client-side cart with add, remove, clear, item count, and total price actions
- Smooth scrolling from the hero CTA and navigation links
- Accessible labels, semantic sections, keyboard-visible focus styles, and image alt text

## Tech stack

- React 19
- React DOM
- Vite
- CSS

## Getting started

### Prerequisites

Install Node.js 18 or newer and npm.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

### Check the project

```bash
npm run lint
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

Build the site with `npm run build`. The generated production files are placed in `dist/`.

The project can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider. Configure the build command as `npm run build` and the publish/output directory as `dist`.

For Vercel or Netlify, connecting the GitHub repository is enough for automatic deployments on pushes. For GitHub Pages, configure a workflow or static hosting action to publish the `dist/` directory after each successful build.

## Project structure

```text
src/
├── components/
│   ├── About.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Menu.jsx
│   └── Navbar.jsx
├── App.jsx
├── index.css
└── main.jsx
```

Product photos are loaded from Unsplash URLs at runtime.
