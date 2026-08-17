import Link from "next/link";
import { MapPin, Phone, Clock, Wrench } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    label: "Адреса",
    value: "м. Київ, вул. Індустріальна, 1", // TODO: replace with the real address
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+380 00 000 00 00", // TODO: replace with the real phone number
  },
  {
    icon: Clock,
    label: "Графік",
    value: "Пн–Сб 9:00–19:00, за записом",
  },
];

export function Footer() {
  return (
    <footer id="contacts" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center border border-copper/70 text-copper">
              <Wrench size={16} strokeWidth={2.2} />
            </span>
            <span className="font-display text-lg font-semibold uppercase tracking-[0.18em]">
              Loft&nbsp;Garage
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ash">
            Невеликий автосервіс із власною кав&apos;ярнею. Ремонтуємо чесно,
            зустрічаємо кавою.
          </p>
          <Link
            href="#booking"
            className="mt-8 inline-block border border-copper px-6 py-3 font-display text-sm font-medium uppercase tracking-[0.15em] text-copper-bright transition-colors hover:bg-copper hover:text-coal"
          >
            Записатись
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 md:gap-8">
          {contacts.map((c) => (
            <div key={c.label}>
              <c.icon size={18} strokeWidth={1.8} className="text-copper" />
              <p className="mt-3 font-display text-xs font-medium uppercase tracking-[0.25em] text-ash">
                {c.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed">{c.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-xs text-ash/70">
        <p>© {new Date().getFullYear()} Loft Garage. Усі права захищено.</p>
        <p>Автосервіс · Кав&apos;ярня · Лофт</p>
      </div>
    </footer>
  );
}
