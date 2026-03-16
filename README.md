# Portfolio Website

A responsive personal portfolio built with React 19, TypeScript, and Vite. Features a custom typewriter hero animation, mobile-first layout, and a design system with semantic color tokens.

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 19, TypeScript, Vite 7, React Router, Tailwind CSS v4 |
| **Icons** | Lucide React, React Icons |

## Features

- **Landing** — Hero section with typewriter animation cycling through roles
- **Projects** — Showcase of work with categorized tech stacks and links to source/demos
- **Experience** — Professional experience timeline
- **Education** — Academic background
- **Contact** — Email and LinkedIn links
- **Responsive** — Mobile hamburger menu, fluid layouts
- **Design System** — Dark theme with semantic tokens (Inter + JetBrains Mono)

## Project Structure

```
src/
├── components/     # Reusable UI (Navbar, Project, Footer, etc.)
├── pages/          # Route-level pages (Landing, Projects, Experience, etc.)
├── App.tsx         # App shell and routing
├── main.tsx        # Entry point
└── index.css       # Global styles and theme
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app at [http://localhost:5173](http://localhost:5173).

### Build

```bash
npm run build
```

Outputs to `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## License

Private — All rights reserved.
