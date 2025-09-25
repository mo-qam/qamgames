# qamgames studio site

A sleek, single-page React experience for the qamgames development studio. Built with Vite and Tailwind CSS for rapid, modern iteration and ready to deploy on GitHub Pages.

## 🚀 Getting started

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`

Visit `http://localhost:5173` to preview the site locally.

## 🛠️ Available scripts

- `npm run dev` – start the Vite dev server.
- `npm run build` – build the production bundle.
- `npm run preview` – preview the build output locally.
- `npm run deploy` – ship the latest build to GitHub Pages (requires repo permissions).

## 🌌 Tech stack

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## 📦 Deployment

The repository now includes a GitHub Actions workflow that automatically builds
and deploys the optimized Vite output to GitHub Pages whenever changes land on
`main`.

1. In **Settings → Pages**, choose **GitHub Actions** as the source (this only
   needs to be done once).
2. Push to `main` or trigger the `Deploy to GitHub Pages` workflow manually—your
   site will rebuild and publish using the latest code.

If you prefer a manual deploy, run `npm run deploy` locally to build and push the
`dist` folder to the `gh-pages` branch via the
[`gh-pages`](https://github.com/tschaub/gh-pages) CLI.
