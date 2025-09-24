# qamgames studio site

A sleek, single-page React experience for the qamgames development studio. Built with Vite and Tailwind CSS for rapid, modern iteration and ready to deploy on GitHub Pages.

## 🚀 Getting started

```bash
npm install
npm run dev
```

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

The Vite config sets `base: '/qamgames/'` so the compiled assets work seamlessly when hosted from the `qamgames` repository via GitHub Pages. Run `npm run deploy` to build and publish the `dist` folder using `gh-pages`.

### GitHub Actions (recommended)

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that automatically builds the site and deploys the `dist/` folder to GitHub Pages whenever you push to `main`.

To enable Pages in your repository:

- Go to the repository on GitHub → `Settings` → `Pages`.
- Under `Build and deployment`, choose `GitHub Actions` (this should be automatic when the workflow runs).
- Ensure the repository has Actions enabled and that `GITHUB_TOKEN` is available (default).

Once enabled, pushes to `main` will trigger the workflow and publish the site.
