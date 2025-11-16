"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import products from "@/utils/product";
import { CardProduct } from "../shared/CardProduct";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "@/i18n/navigation";
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
    <section className="py-8 sm:py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-4">
        <div className="flex  justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl md:text-4xl font-bold text-[rgb(58,42,31)]">
            Məhsullar
          </h2>
          <Link
            href="/products"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base font-semibold text-[rgb(58,42,31)] hover:text-[rgb(58,42,31)]/80 transition-colors"
          >
            Hamısına Bax
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
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
          <CarouselContent className="-ml-2 sm:-ml-4">
            {allProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 sm:pl-4 basis-[100%] sm:basis-[85%] md:basis-1/4 flex md:block"
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