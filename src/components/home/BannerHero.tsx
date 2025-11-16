import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import RotatingText from "../RotatingText";
import { ShimmerButton } from "../ui/shimmer-button";
import Link from "next/link";

export default async function BannerHero() {
  const t = await getTranslations("buttons");

  return (
    <div className="relative w-full h-[250px] md:h-[650px] overflow-hidden">
      <Image
        src="/images/banner.png"
        alt="Banner"
        width={1920}
        height={600}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(58,42,31,0.45)]" />

      <div
        className="
          absolute inset-0 z-10 flex h-fit 
          items-center justify-center text-center 
          md:items-start md:pt-30 md:pl-30 md:justify-start md:text-left
        "
      >
        <h1
          className="
            text-3xl sm:text-4xl font-medium 
            text-[#F3E8D2] md:text-8xl font-serif 
            flex items-center text-center gap-3 
            md:items-center md:text-left md:gap-5
            drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)]
          "
        >
          Zərif
          <RotatingText
            texts={["Toxunuşlar", "Detallar", "Zövq", "Anlar!"]}
            mainClassName="
              px-2 sm:px-2 md:px-3 
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
        className="absolute inset-0 flex pb-10 items-end justify-center pointer-events-none md:pb-35 "
      >
        <Link href="/products" className="pointer-events-auto">
          <ShimmerButton
            background="rgba(58,42,31,0.85)"
            shimmerColor="#D4A85F"
            borderRadius="40px"
          >
            <span className="px-6 md:px-10 text-sm md:text-lg font-medium text-[#F3E8D2]">
              {t("button_hero")}
            </span>
          </ShimmerButton>
        </Link>
      </div>
      
    </div>
  );
}