import Hero from "@/components/Hero";
import HomeCaraousel from "@/components/HomeCaraousel";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/layout-components/ProductList";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="flex flex-col items-center gap-5 justify-center">
        <h1 className="text-center text-3xl -mr-3 font-bold">
          Our Collections
        </h1>
        <HomeCaraousel />
      </section>
      <section className="flex flex-col items-start gap-5 justify-center mt-6">
        <h1 className="text-center text-3xl -mr-3 font-bold">
          Featured Products
        </h1>
        <ProductList />
      </section>
    </>
  );
}
