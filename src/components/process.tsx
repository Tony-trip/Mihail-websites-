import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const steps = [
  {
    title: "Запишіться онлайн",
    text: "Залиште заявку на сайті — ми передзвонимо, уточнимо деталі й підберемо зручний час.",
  },
  {
    title: "Приїздіть без черги",
    text: "Ваш час зарезервовано. Авто одразу їде на підйомник, а не в чергу на паркінгу.",
  },
  {
    title: "Кава, поки ми працюємо",
    text: "Влаштовуйтесь у лаунжі: кава за наш рахунок, Wi-Fi і вид на цех. Кошторис погоджуємо до старту робіт.",
  },
  {
    title: "Забирайте авто",
    text: "Показуємо замінені деталі, розповідаємо, що зробили, і даємо гарантію на роботу.",
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        index="03"
        overline="Як це працює"
        title="Чотири кроки — нуль нервів"
      />

      <ol className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={0.08 * i} className="bg-panel p-8">
            <li className="h-full">
              <span className="font-display text-5xl font-semibold text-copper/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold uppercase tracking-wide">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ash">{s.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
