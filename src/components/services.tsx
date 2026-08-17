import { Gauge, Wrench, Disc3, CarFront, CircleDot, Zap } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const services = [
  {
    icon: Gauge,
    title: "Діагностика",
    text: "Комп'ютерна діагностика та перевірка ходової. Спочатку розбираємось — потім пропонуємо ремонт.",
  },
  {
    icon: Wrench,
    title: "Технічне обслуговування",
    text: "Заміна масла, фільтрів і робочих рідин. Нагадаємо про наступне ТО, щоб ви не тримали це в голові.",
  },
  {
    icon: Disc3,
    title: "Гальмівна система",
    text: "Колодки, диски, супорти, гальмівна рідина. Те, на чому не економлять — робимо як для себе.",
  },
  {
    icon: CarFront,
    title: "Підвіска та ходова",
    text: "Амортизатори, сайлентблоки, кульові, рульове. Повертаємо авто зібраність і тишу на дорозі.",
  },
  {
    icon: CircleDot,
    title: "Шиномонтаж",
    text: "Сезонна заміна, балансування, ремонт проколів. За записом — приїхали, випили кави, поїхали.",
  },
  {
    icon: Zap,
    title: "Електрика та світло",
    text: "Акумулятори, генератори, стартери, проводка та освітлення. Знаходимо причину, а не симптом.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        index="01"
        overline="Послуги"
        title="Робимо небагато — але як слід"
        lead="Ми свідомо невеликий сервіс: беремо стільки авто, скільки можемо зробити якісно. Кожна робота — з погодженим кошторисом і гарантією."
      />

      <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal
            key={s.title}
            delay={0.06 * i}
            className="group bg-panel p-8 transition-colors hover:bg-panel-2"
          >
            <div className="flex items-center justify-between">
              <s.icon
                size={24}
                strokeWidth={1.6}
                className="text-copper transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span className="font-display text-xs tracking-[0.3em] text-line group-hover:text-ash/50">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ash">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
