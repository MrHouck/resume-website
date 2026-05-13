import { JETBRAINS_MONO, SOURCE_SERIF } from "@/utils/constants";

export const metadata = {
  title: "404 — Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center px-5">
      <div className="flex flex-col gap-6 max-w-md">
        <p className={`${JETBRAINS_MONO.className} text-[11px] tracking-[0.12em] uppercase text-(--accent)`}>
          404
        </p>

        <h1 className={`${SOURCE_SERIF.className} text-[42px] leading-tight font-normal tracking-[-0.02em] text-(--primary-text)`}>
          Nothing here.
        </h1>

        <p className={`${SOURCE_SERIF.className} text-[17px] leading-[1.65] text-(--secondary-text)`}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col gap-3 pt-2 border-t border-(--border)">
          <p className={`${JETBRAINS_MONO.className} text-[10px] tracking-widest uppercase text-(--tertiary-text) mb-1`}>
            Maybe you were looking for
          </p>
          {[
            { href: "/",         label: "Home"     },
            { href: "/projects", label: "Projects" },
            { href: "/resume",   label: "Résumé"   },
            { href: "/musings",  label: "Musings"  },
            { href: "/now",      label: "Now"      },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`${JETBRAINS_MONO.className} text-[11px] tracking-widest uppercase text-(--secondary-text) hover:text-(--accent) transition-colors`}
            >
              {label} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
