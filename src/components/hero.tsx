import Link from "next/link";
import { CalendarCheck, Coffee, ReceiptText } from "lucide-react";
import { Reveal } from "./reveal";

const ticker = [
  "Діагностика",
  "Технічне обслуговування",
  "Гальма",
  "Підвіска",
  "Шиномонтаж",
  "Електрика",
  "Свіжа кава",
];

const stats = [
  { icon: CalendarCheck, text: "Працюємо тільки за записом — без черг і очікування «в живу»" },
  { icon: ReceiptText, text: "Прозорий кошторис до початку робіт. Без сюрпризів у кінці" },
  { icon: Coffee, text: "Лаунж-зона з кав'ярнею, поки ваше авто на підйомнику" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* warm workshop light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 80% -10%, rgba(217,111,50,0.16), transparent 60%), radial-gradient(700px 420px at 0% 110%, rgba(217,111,50,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-32">
        <Reveal>
          <p className="font-display text-xs font-medium uppercase tracking-[0.4em] text-copper">
            Автосервіс · Кав&apos;ярня · Лофт
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold uppercase leading-[1.02] tracking-wide md:text-8xl">
            Сервіс для авто.
            <br />
            <span className="text-copper-bright">Простір для вас.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ash md:text-lg">
            Невеликий автосервіс у стилі лофт — цегла, метал і тепле світло.
            Чесний ремонт за записом та затишна клієнтська зона, де приємно
            випити кави й попрацювати, поки ми займаємось вашим авто.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#booking"
            className="bg-copper px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-coal transition-colors hover:bg-copper-bright"
          >
            Записатись на сервіс
          </Link>
          <Link
            href="#services"
            className="border border-line px-7 py-3.5 font-display text-sm font-medium uppercase tracking-[0.15em] text-smoke transition-colors hover:border-ash"
          >
            Наші послуги
          </Link>
        </Reveal>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.text} delay={0.1 * i} className="bg-panel p-6">
              <s.icon size={20} className="text-copper" strokeWidth={1.8} />
              <p className="mt-4 text-sm leading-relaxed text-ash">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* industrial ticker */}
      <div className="relative border-y border-line bg-panel py-3.5">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="marquee-track flex shrink-0 items-center">
            {[...ticker, ...ticker].map((item, i) => (
              <span
                key={i}
                className="flex items-center font-display text-sm font-medium uppercase tracking-[0.25em] text-ash"
              >
                <span className="px-6">{item}</span>
                <span className="text-copper">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
