import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

// Minimal backend: validate the request and append it to a JSON file on the
// server (data/bookings.json). Easy to swap later for e-mail / Telegram / DB.

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "bookings.json");

type Booking = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  car: string;
  service: string;
  comment: string;
};

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Некоректний запит." }, { status: 400 });
  }

  const name = clean(body.name, 100);
  const phone = clean(body.phone, 20);
  const car = clean(body.car, 100);
  const service = clean(body.service, 100);
  const comment = clean(body.comment, 1000);

  if (name.length < 2) {
    return NextResponse.json({ error: "Вкажіть, будь ласка, ім'я." }, { status: 400 });
  }
  if (!/^[+\d][\d\s()-]{6,19}$/.test(phone)) {
    return NextResponse.json(
      { error: "Вкажіть, будь ласка, коректний номер телефону." },
      { status: 400 },
    );
  }

  const booking: Booking = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name,
    phone,
    car,
    service,
    comment,
  };

  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    let bookings: Booking[] = [];
    try {
      bookings = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
    } catch {
      // first booking — file does not exist yet
    }
    bookings.push(booking);
    await fs.writeFile(DATA_FILE, JSON.stringify(bookings, null, 2));
  } catch (err) {
    console.error("booking: failed to persist", err);
    return NextResponse.json(
      { error: "Не вдалося зберегти заявку. Спробуйте пізніше." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, id: booking.id });
}
