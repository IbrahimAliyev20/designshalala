import { Product } from "@/components/home/Product";
import Image from "next/image";
import React from "react";
import { getTranslations } from "next-intl/server";

async function ProductsListingPage() {
  const t = await getTranslations("products");

  return (
    <div>
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center pt-16 sm:pt-20 overflow-hidden">
        <Image
          src="/images/ctabg.png"
          alt="About background"
          width={1000}
          height={400}
          className="absolute object-cover inset-0 z-0 opacity-100 h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-[rgb(58,42,31)]/60 z-10" />

        <div className="relative z-20 text-center text-[#F3E8D2] p-4 sm:p-6 md:p-4">
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold tracking-tight leading-tight sm:leading-normal px-2 sm:px-0">
            {t("hero_title")}
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-xl max-w-2xl mx-auto text-[#F3E8D2]/90 px-2 sm:px-0">
            {t("hero_subtitle")}
          </p>
        </div>
      </section>

      <Product />
    </div>
  );
}

export default ProductsListingPage;
