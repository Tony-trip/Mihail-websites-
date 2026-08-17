import { Reveal } from "./reveal";

export function SectionHeading({
  index,
  overline,
  title,
  lead,
}: {
  index: string;
  overline: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-baseline gap-4 text-copper">
        <span className="font-display text-sm tracking-[0.3em]">{index}</span>
        <span className="h-px w-10 self-center bg-copper/60" />
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ash">
          {overline}
        </span>
      </div>
      <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-wide md:text-6xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ash md:text-lg">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
