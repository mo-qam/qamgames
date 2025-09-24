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
