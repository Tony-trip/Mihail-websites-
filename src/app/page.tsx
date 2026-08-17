import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Space } from "@/components/space";
import { Process } from "@/components/process";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Space />
        <Process />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
