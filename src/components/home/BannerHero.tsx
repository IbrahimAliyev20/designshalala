import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import RotatingText from "../RotatingText";
import { ShimmerButton } from "../ui/shimmer-button";

export default async function BannerHero() {
  const t = await getTranslations("buttons");

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <Image
        src="/images/banner.png"
        alt="Banner"
        width={1920}
        height={600}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 z-10 flex h-full items-start pt-30 pl-10  justify-start">
        <h1 className="  text-4xl font-medium text-[#fafdff]  md:text-8xl font-serif flex items-center gap-5 ">
          Zərif{" "}
          <RotatingText
            texts={["Toxunuşlar", "Detallar", "Zövq", "Anlar!"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-[#7d6409]/60 text-white/80 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
      <div className="absolute inset-0 flex pb-35 items-end justify-center pointer-events-none">
        <ShimmerButton className="shadow-2xl pointer-events-auto z-20">
          <span className="text-center px-10 text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-xl dark:from-white dark:to-slate-900/10">
            {t("button_hero")}
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
}
