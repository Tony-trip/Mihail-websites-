import { Coffee, Wifi, Eye, Armchair } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const features = [
  {
    icon: Eye,
    title: "Вид на цех",
    text: "Скляна стіна між лаунжем і цехом: бачите, що відбувається з вашим авто, у реальному часі.",
  },
  {
    icon: Coffee,
    title: "Власна кав'ярня",
    text: "Еспресо, фільтр, какао та щось до кави. Чашка — за наш рахунок, поки авто в роботі.",
  },
  {
    icon: Wifi,
    title: "Робочий куток",
    text: "Швидкий Wi-Fi, розетки біля кожного місця, великий стіл. Очікування перетворюється на робочу годину.",
  },
  {
    icon: Armchair,
    title: "Лофт, у якому затишно",
    text: "Цегла, метал, дерево й тепле світло. Комфортно всім — і в костюмі, і в тату.",
  },
];

export function Space() {
  return (
    <section id="space" className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="02"
          overline="Клієнтська зона"
          title="Чекати тут — приємно"
          lead="Ми прибрали головний біль автосервісів — незручне очікування. Замість лавки під стіною — лаунж із кавою, світлом і місцем для роботи."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Mood panel — placeholder until real interior photos arrive */}
          <Reveal className="relative min-h-[320px] overflow-hidden border border-line lg:col-span-3">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, #211d19 0%, #17140f 55%, #131110 100%), radial-gradient(600px 300px at 85% 20%, rgba(217,111,50,0.25), transparent 60%)",
                backgroundBlendMode: "screen",
              }}
            />
            {/* brick rhythm */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent 0 34px, #d96f32 34px 35px), repeating-linear-gradient(90deg, transparent 0 89px, #d96f32 89px 90px)",
              }}
            />
            <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
              <p className="font-display text-xs uppercase tracking-[0.35em] text-copper">
                Лаунж · Кава · Wi-Fi
              </p>
              <p className="mt-4 max-w-md font-display text-3xl font-semibold uppercase leading-tight tracking-wide md:text-4xl">
                Кава завжди свіжа. Черги — ніколи.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ash">
                Тут скоро з&apos;являться фото нашого простору. А поки — просто
                приїздіть подивитись наживо.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.07 * i} className="bg-panel p-6">
                <f.icon size={20} strokeWidth={1.8} className="text-copper" />
                <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
