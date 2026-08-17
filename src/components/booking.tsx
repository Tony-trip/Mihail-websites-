"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const services = [
  "Діагностика",
  "Технічне обслуговування",
  "Гальмівна система",
  "Підвіска та ходова",
  "Шиномонтаж",
  "Електрика та світло",
  "Інше / не знаю, що з авто",
];

const inputCls =
  "w-full border border-line bg-panel px-4 py-3 text-sm text-smoke placeholder:text-ash/60 outline-none transition-colors focus:border-copper";

type Status = "idle" | "sending" | "done" | "error";

export function Booking() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Щось пішло не так. Спробуйте ще раз.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setError("Немає з'єднання. Спробуйте ще раз.");
      setStatus("error");
    }
  }

  return (
    <section id="booking" className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              index="04"
              overline="Запис"
              title="Залиште заявку"
              lead="Напишіть, що з авто — ми передзвонимо протягом робочого дня, погодимо час і зорієнтуємо по вартості."
            />
            <Reveal className="hidden lg:block">
              <p className="border-l-2 border-copper pl-5 text-sm leading-relaxed text-ash">
                Не любите форми? Просто зателефонуйте чи напишіть у месенджер —
                контакти внизу сторінки.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            {status === "done" ? (
              <div className="flex h-full min-h-[320px] flex-col items-start justify-center border border-copper/40 bg-panel p-10">
                <CheckCircle2 size={36} className="text-copper" strokeWidth={1.6} />
                <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-wide">
                  Заявку прийнято
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  Дякуємо! Передзвонимо протягом робочого дня, щоб узгодити
                  зручний час візиту.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="name"
                    required
                    maxLength={100}
                    placeholder="Ваше ім'я *"
                    className={inputCls}
                  />
                  <input
                    name="phone"
                    required
                    type="tel"
                    maxLength={20}
                    placeholder="Телефон *"
                    className={inputCls}
                  />
                </div>
                <input
                  name="car"
                  maxLength={100}
                  placeholder="Авто (марка, модель, рік)"
                  className={inputCls}
                />
                <select name="service" className={inputCls} defaultValue={services[0]}>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-panel">
                      {s}
                    </option>
                  ))}
                </select>
                <textarea
                  name="comment"
                  rows={4}
                  maxLength={1000}
                  placeholder="Коментар: що турбує, коли зручно приїхати…"
                  className={`${inputCls} resize-none`}
                />

                {status === "error" ? (
                  <p className="text-sm text-copper-bright">{error}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 flex items-center justify-center gap-2 bg-copper px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.15em] text-coal transition-colors hover:bg-copper-bright disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <LoaderCircle size={16} className="animate-spin" />
                      Надсилаємо…
                    </>
                  ) : (
                    "Надіслати заявку"
                  )}
                </button>
                <p className="text-xs leading-relaxed text-ash/70">
                  Надсилаючи форму, ви погоджуєтесь, що ми використаємо контакти
                  лише щоб зв&apos;язатися щодо запису.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
