"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RainbowButton } from "../ui/rainbow-button"; // Sizin xüsusi düyməniz

export function AboutSec() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Sol Tərəf: Şəkil */}
          {/* DƏYİŞİKLİK: Mobil hündürlüyü (h-[300px]) və Desktop (md:h-[450px]) */}
          <div className="w-full h-[300px] md:h-[450px] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/bgaboutsec.jpg"
              alt="Əl işi hədiyyələr"
              width={1000}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Bizim Fəlsəfəmiz
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Hər Detalda Bir Hekayə
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center md:text-left mb-6">
              Biz inanırıq ki, ən gözəl hədiyyələr sevgi ilə hazırlananlardır.
              Hər bir kompozisiya, xonça və buket, sizin ən xüsusi anlarınızı
              unudulmaz etmək üçün zərifliklə, əl ilə hazırlanır.
            </p>
            <RainbowButton asChild>
              <Link
                href="/about"
                className="flex items-center gap-2 text-sm md:text-base px-6 py-5"
              >
                Haqqımızda Daha Ətraflı
                <ArrowRight className="w-4 h-4" />
              </Link>
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
