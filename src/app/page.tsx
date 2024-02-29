import Hero from "@/components/Hero";
import HomeCaraousel from "@/components/HomeCaraousel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="flex justify-center">
        <HomeCaraousel />
      </section>
    </>
  );
}
