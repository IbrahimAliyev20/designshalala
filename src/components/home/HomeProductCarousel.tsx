"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import products from "@/utils/product";
import { CardProduct } from "../shared/CardProduct";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function HomeProductCarousel() {
  const allProducts = products;

  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  );

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">
            Məhsullar
          </h2>
          <Link
            href="/products"
            className="flex items-center gap-2 text-sm md:text-base font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            Hamısına Bax
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {allProducts.map((product) => (
              <CarouselItem
                key={product.id}
                // DƏYİŞİKLİK: basis-[100%] -> basis-4/5 (80%)
                className="pl-4 basis-4/5 md:basis-1/4"
              >
                <CardProduct product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}