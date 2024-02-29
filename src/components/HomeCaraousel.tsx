"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Category } from "@/interface/category";

const categories: Category[] = [
  {
    name: "Mobiles",
    image:
      "https://m.media-amazon.com/images/I/412CKVTe8dL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    name: "HeadPhones",
    image: "https://m.media-amazon.com/images/I/51vUMenoNkL._SX679_.jpg",
  },
  {
    name: "Laptops",
    image: "https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg",
  },
  {
    name: "Speakers",
    image:
      "https://m.media-amazon.com/images/I/41mtPtOAkUL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "Cameras",
    image: "https://m.media-amazon.com/images/I/81KniKQ71CL._SX679_.jpg",
  },
];

export default function HomeCaraousel() {
  return (
    <Carousel className="w-full max-w-7xl cursor-pointer">
      <CarouselContent className="-ml-1">
        {categories.map((c, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis:1/3 xl:basis-1/4"
          >
            <Card>
              <CardContent className="flex flex-col aspect-square items-center justify-center ">
                <div className="w-full h-56 relative">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p>{c.name}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
