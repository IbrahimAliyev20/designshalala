import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import RotatingText from "../RotatingText";
import { ShimmerButton } from "../ui/shimmer-button";
import { Link } from "@/i18n/navigation";

export default async function BannerHero() {
  const t = await getTranslations("buttons");
  const tHero = await getTranslations("hero");
  const tCommon = await getTranslations("common");

  const rotatingTexts = tHero.raw("rotating_texts") as string[];

  return (
    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[650px] overflow-hidden">
      <Image
        src="/images/banner.png"
        alt={tCommon("banner_alt")}
        width={1920}
        height={600}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[rgba(58,42,31,0.45)]" />

      <div
        className="
          absolute inset-0 z-10 flex h-fit 
          items-center justify-center text-center 
          px-4 sm:px-6 md:px-0
          pt-50 sm:pt-12 md:pt-[120px] md:pl-[120px] md:items-start md:justify-start md:text-left
        "
      >
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-medium 
            text-[#F3E8D2] font-serif 
            flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3
            md:items-center md:justify-start md:text-left md:gap-5
            drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)]
            max-w-[90%] sm:max-w-[85%] md:max-w-none
          "
        >
          <span className="text-center md:text-left">{tHero("title")}</span>
          <RotatingText
            texts={rotatingTexts}
            mainClassName="
              px-2 sm:px-2.5 md:px-3 
              bg-[#D4A85F33] 
              text-[#F3E8D2] 
              overflow-hidden 
              py-0.5 sm:py-1 md:py-2 
              justify-center 
              rounded-lg 
              backdrop-blur-sm 
              shadow-[0_4px_12px_rgba(0,0,0,0.35)]
            "
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </h1>
      </div>

      <div
        className="absolute inset-0 flex pb-6 sm:pb-8 md:pb-[140px] items-end justify-center pointer-events-none"
      >
        <Link href="/products" className="pointer-events-auto">
          <ShimmerButton
            background="rgba(58,42,31,0.85)"
            shimmerColor="#D4A85F"
            borderRadius="40px"
          >
            <span className="px-4 sm:px-6 md:px-10 text-xs sm:text-sm md:text-lg font-medium text-[#F3E8D2]">
              {t("button_hero")}
            </span>
          </ShimmerButton>
        </Link>
      </div>
    </div>
  );
}
