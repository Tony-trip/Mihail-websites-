import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "LOFT GARAGE — автосервіс без черг із власною кав'ярнею",
  description:
    "Невеликий автосервіс у стилі лофт: чесний ремонт за записом, прозорий кошторис і затишна клієнтська зона з кавою, поки ваше авто в роботі.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${oswald.variable} ${manrope.variable} grain antialiased`}>
        {children}
      </body>
    </html>
  );
}
