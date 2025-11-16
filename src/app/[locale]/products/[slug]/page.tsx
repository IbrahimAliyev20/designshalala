"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { ShoppingCart, Plus, Minus, ChevronRight, Check } from "lucide-react";

import products from "@/utils/product";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

// DƏYİŞİKLİK: RainbowButton əvəzinə standart Button import edildi
import { Button } from "@/components/ui/button";

// --- Brend Palitrası (Referans üçün) ---
// Tünd Qəhvəyi: rgb(58, 42, 31)
// Krem: #F3E8D2
// Qızılı: #D4A85F
// İsti Bej (Fon): #FAF7F2
// İsti Boz (Mətn): text-stone-700 / 600
// İsti Açıq Boz (Mətn): text-stone-500
// ----------------------------------------

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const params = useParams();
  const slug = params.slug;

  const { addToCart } = useCart();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container mx-auto max-w-7xl p-4 pt-20 md:pt-28 ">
      {/* Breadcrumbs - Rənglər brendə uyğunlaşdırıldı */}
      <div className="flex items-center text-sm text-stone-500 gap-1 mb-6 ">
        <Link href="/" className="hover:text-[rgb(58,42,31)]">
          Ana Səhifə
        </Link>
        <ChevronRight size={14} />
        <Link href="/products" className="hover:text-[rgb(58,42,31)]">
          Məhsullar
        </Link>
        <ChevronRight size={14} />
        <span className="text-[rgb(58,42,31)] font-medium">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
        
        {/* Şəkil Qalereyası - Rənglər brendə uyğunlaşdırıldı */}
        <div className="w-full flex flex-col gap-4 rounded-xl ">
          <div className="aspect-square w-full overflow-hidden rounded-xl border border-stone-200 shadow-sm p-4">
            <Image
              src={product.gallery_images[selectedImage]}
              alt={product.title}
              width={800}
              height={800}
              className="w-full h-full object-contain transition-opacity duration-300"
            />
          </div>
          <div className="grid grid-cols-5 gap-2 md:gap-4">
            {product.gallery_images.map((imgSrc, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`aspect-square w-full overflow-hidden rounded-lg border-2 
                            transition-all p-1
                            ${
                              selectedImage === index
                                // DƏYİŞİKLİK: Mavi rəng qəhvəyi ilə əvəz edildi
                                ? "border-[rgb(58,42,31)] scale-105"
                                // DƏYİŞİKLİK: Soyuq boz isti boz ilə əvəz edildi
                                : "border-stone-200 opacity-70 hover:opacity-100"
                            }`}
              >
                <Image
                  src={imgSrc}
                  alt={`${product.title} qalereya ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Məlumat Hissəsi - Rənglər brendə uyğunlaşdırıldı */}
        {/* DƏYİŞİKLİK: Yaşıl fon isti bej ilə əvəz edildi */}
        <div className="flex flex-col gap-4 bg-[#FAF7F2] h-full justify-between p-6 rounded-xl ">
          {/* DƏYİŞİKLİK: Mavi kateqoriya rəngi qızılı teq ilə əvəz edildi */}
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#D4A85F]/20 text-[rgb(58,42,31)] self-start">
            {product.category}
          </span>
          {/* DƏYİŞİKLİK: Başlıq rəngi brendə uyğun oldu */}
          <h1 className="text-2xl md:text-4xl font-bold text-[rgb(58,42,31)]">
            {product.title}
          </h1>
          <div className="flex items-baseline gap-3 my-2">
            {/* DƏYİŞİKLİK: Qiymət rəngi brendə uyğun oldu */}
            <span className="text-2xl md:text-3xl font-bold text-[rgb(58,42,31)]">
              {product.price.toFixed(2)} AZN
            </span>
          </div>
          {/* DƏYİŞİKLİK: Mətn rəngi brendə uyğun oldu */}
          <p className="text-base leading-relaxed text-stone-700 mt-2">
            {product.long_description}
          </p>
          <div className="mt-4">
            <h3 className="text-base md:text-lg font-semibold mb-3 text-[rgb(58,42,31)]">Xüsusiyyətlər:</h3>
            <ul className="space-y-2">
              {product.specs.map((spec) => (
                <li key={spec.key} className="flex items-center gap-2 text-sm">
                  {/* DƏYİŞİKLİK: Yaşıl ikon qızılı rəng ilə əvəz edildi */}
                  <Check size={16} className="text-[#D4A85F]" />
                  <span className="font-medium text-[rgb(58,42,31)]">{spec.key}:</span>
                  <span className="text-stone-700">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* DƏYİŞİKLİK: Soyuq boz isti boz ilə əvəz edildi */}
          <div className="my-4 border-t border-stone-200" />

          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* DƏYİŞİKLİK: Soyuq rənglər isti rənglər ilə əvəz edildi */}
            <div className="flex items-center justify-center rounded-full border border-stone-300 p-1 md:p-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2 rounded-full text-stone-600 hover:bg-stone-100 transition-colors disabled:opacity-50"
                disabled={quantity === 1}
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center text-lg font-semibold text-[rgb(58,42,31)]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2 rounded-full text-stone-600 hover:bg-stone-100 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>

            {/* DƏYİŞİKLİK: RainbowButton əvəzinə brendin əsas düyməsi */}
            <Button
              size="lg" // 'size' prop-u 'Button' komponenti üçündür
              className="flex-1 w-full text-base md:text-lg py-5 md:py-6
                         bg-[rgb(58,42,31)] text-[#F3E8D2] font-semibold
                         hover:bg-[rgb(58,42,31)]/90 transition-colors"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={20} className="mr-2" />
              Səbətə Əlavə Et
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}