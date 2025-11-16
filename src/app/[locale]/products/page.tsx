import { Product } from "@/components/home/Product";
import Image from "next/image";
import React from "react";

function ProductsListingPage() {
  return (
    <div>
      {/* === HERO BÖLMƏSİ === */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center pt-20">
        <Image
          src="/images/ctabg.png"
          alt="Haqqımızda arxa fon"
          width={1000}
          height={400}
          className="absolute object-cover inset-0 z-0 opacity-100 h-full w-full" // Opacity 100% etdim, çünki overlay rəngi idarə edəcək
        />
        {/* DƏYİŞİKLİK: Qara overlay əvəzinə brendin isti qəhvəyi overlay-i */}
        <div className="absolute inset-0 bg-[rgb(58,42,31)]/60 z-10" />

        {/* DƏYİŞİKLİK: Mətn rəngləri 'white' əvəzinə brendin krem rəngi oldu */}
        <div className="relative z-20 text-center text-[#F3E8D2] p-4">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Sizin Xüsusi Gününüz Üçün
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[#F3E8D2]/90">
            Nişan, toy və ya zərif bir hədiyyə üçün ən unikal seçimlər burada.
          </p>
        </div>
      </section>

      {/* Product komponenti (aşağıda düzəldilib) */}
      <Product />
    </div>
  );
}

export default ProductsListingPage;