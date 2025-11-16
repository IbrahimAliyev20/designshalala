"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ShimmerButton } from "../ui/shimmer-button";

export function AboutSec() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ">
          <div className="w-full h-[300px] md:h-[450px] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/bgaboutsec.jpg"
              alt="Əl işi hədiyyələr"
              width={1000}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col h-full justify-between items-center md:items-start">
            <span className="text-sm font-semibold text-[#725d39b5] uppercase tracking-wider">
              Bizim Fəlsəfəmiz
            </span>
       <div className="flex flex-col gap-4 text-center">
             <h2 className="text-2xl md:text-4xl font-bold text-stone-700 mt-3 mb-2 md:mb-4">
              Hər Detalda Bir Hekayə
            </h2>
            <p className="text-base md:text-lg text-stone-500 leading-relaxed text-center  mb-6">
              Biz inanırıq ki, ən gözəl hədiyyələr sevgi ilə hazırlananlardır.
              Hər bir kompozisiya, xonça və buket, sizin ən xüsusi anlarınızı
              unudulmaz etmək üçün zərifliklə, əl ilə hazırlanır.
            </p>
       </div>
            <div className="w-full flex justify-end">
              <Link
              href="/about"
              className="flex items-center gap-2 text-sm md:text-base py-5"
            >
              <ShimmerButton
                background="rgba(58,42,31,0.85)"
                shimmerColor="#D4A85F"
                borderRadius="10px"
              >
                Haqqımızda Daha Ətraflı
                <ArrowRight className="w-4 h-4" />
              </ShimmerButton>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
