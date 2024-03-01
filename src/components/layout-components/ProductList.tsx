import { Product } from "@/interface/product";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products: Product[] = [
    {
      image:
        "https://m.media-amazon.com/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg",
      title: "Smartphone Model X",
      description:
        "A powerful and feature-rich smartphone for your everyday needs.",
      price: 499.99,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/21Vf6jjGhzL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Wireless Noise-Canceling Headphones",
      description:
        "Immerse yourself in high-quality sound with these premium headphones.",
      price: 199.99,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41O7YJM+9+L._SY300_SX300_.jpg",
      title: "Smartwatch Series Z",
      description:
        "Stay connected and track your health with this stylish and intelligent smartwatch.",
      price: 149.99,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41oP5i+IW7L._SY300_SX300_.jpg",
      title: "Laptop Pro",
      description:
        "Powerful laptop with high-performance specs for work and entertainment.",
      price: 1099.99,
    },
    {
      image: "https://m.media-amazon.com/images/I/819SRH2DKBL._SX679_.jpg",
      title: "4K Ultra HD Smart TV",
      description:
        "Enjoy stunning visuals and smart features with this advanced television.",
      price: 799.99,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41f8i6xfzjL._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Gaming Console Deluxe",
      description:
        "Experience gaming like never before with this top-of-the-line gaming console.",
      price: 449.99,
    },
  ];
  return (
    <section className="flex flex-wrap gap-4 justify-between items-center w-full">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </section>
  );
}
