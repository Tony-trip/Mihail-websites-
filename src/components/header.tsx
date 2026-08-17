import Link from "next/link";
import { Wrench } from "lucide-react";

const nav = [
  { href: "#services", label: "Послуги" },
  { href: "#space", label: "Простір" },
  { href: "#process", label: "Як це працює" },
  { href: "#contacts", label: "Контакти" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-coal/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center border border-copper/70 text-copper">
            <Wrench size={16} strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-semibold uppercase tracking-[0.18em]">
            Loft&nbsp;Garage
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ash transition-colors hover:text-smoke"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#booking"
          className="border border-copper bg-copper/10 px-4 py-2 font-display text-sm font-medium uppercase tracking-[0.15em] text-copper-bright transition-colors hover:bg-copper hover:text-coal"
        >
          Записатись
        </Link>
      </div>
    </header>
  );
}
