import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/interface/product";
import Image from "next/image";
import { Button } from "../ui/button";

export default function ProductCard({ product }: { product: Product }) {
  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <Card
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
      className="bg-card max-w-xs rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
    >
      <CardHeader className="w-full h-44 relative">
        <Image
          src={product.image}
          alt={product.title}
          fill={true}
          style={{ objectFit: "contain" }}
        />

        <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white">
          New Arrival
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold mb-2">
          {product.title.slice(0, 25)}
        </CardTitle>
        <CardDescription className="text-gray-600 mb-4">
          {product.description}
        </CardDescription>
        <p className="text-gray-700 mb-2">$99.99</p>
      </CardContent>
      <CardFooter className=" bg-gray-100">
        <Button className="bg-primary opacity-95 hover:opacity-100 text-white py-2 rounded-lg w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
