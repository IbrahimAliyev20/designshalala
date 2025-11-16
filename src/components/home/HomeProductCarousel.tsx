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
    <section className="py-12 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          {/* DƏYİŞİKLİK: Başlıq rəngi sərt qara (gray-900) əvəzinə brendin tünd qəhvəyi rəngi oldu */}
          <h2 className="text-xl md:text-3xl font-bold text-[rgb(58,42,31)]">
            Məhsullar
          </h2>
          {/* DƏYİŞİKLİK: Link rəngi mavi əvəzinə brendin tünd qəhvəyi rəngi oldu */}
          <Link
            href="/products"
            className="flex items-center gap-2 text-sm md:text-base font-semibold text-[rgb(58,42,31)] hover:text-[rgb(58,42,31)]/80 transition-colors"
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
                className="pl-4 basis-[100%] md:basis-1/3"
              >
                {/* Bu komponentin daxili rəngləri növbəti faylda düzəldilib */}
                <CardProduct product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}