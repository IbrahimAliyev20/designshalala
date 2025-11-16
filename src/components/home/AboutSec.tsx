"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ShimmerButton } from "../ui/shimmer-button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function AboutSec() {
  const t = useTranslations("about");
  const tButtons = useTranslations("buttons");

  return (
    <section className="py-8 sm:py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[450px] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/bgaboutsec.jpg"
              alt="Handcrafted gifts"
              width={1000}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col h-full justify-between items-center md:items-start gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm font-semibold text-[#725d39b5] uppercase tracking-wider text-center md:text-left w-full">
              {t("philosophy_label")}
            </span>
            <div className="flex flex-col gap-3 sm:gap-4 text-center md:text-left w-full">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-stone-700 mt-2 sm:mt-3 mb-2 md:mb-4">
                {t("philosophy_title")}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-stone-500 leading-relaxed text-center md:text-left mb-4 sm:mb-6 px-2 sm:px-0">
                {t("philosophy_desc")}
              </p>
            </div>
            <div className="w-full flex justify-center md:justify-end mt-2 sm:mt-0">
              <Link href="/about" className="inline-block">
                <ShimmerButton
                  background="rgba(58,42,31,0.85)"
                  shimmerColor="#D4A85F"
                  borderRadius="10px"
                  className="text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3"
                >
                  <span className="flex items-center gap-2">
                    {tButtons("learn_more")}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
