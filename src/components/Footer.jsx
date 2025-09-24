export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="uppercase tracking-[0.35em] text-slate-400">qamgames</p>
        <p className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} qamgames. Crafted with precision & passion.
        </p>
        {/* <div className="flex justify-center gap-4 text-[11px] uppercase tracking-[0.25em] text-slate-400">
          <a href="https://github.com" className="transition hover:text-white">
            GitHub
          </a>
          <a href="https://itch.io" className="transition hover:text-white">
            Itch.io
          </a>
        </div> */}
      </div>
    </footer>
  );
}
