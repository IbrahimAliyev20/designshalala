"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { ShoppingCart, Plus, Minus, ChevronRight, Check } from "lucide-react";
import products from "@/utils/product";
import { Link } from "@/i18n/navigation";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const params = useParams();
  const slug = params.slug;
  const { addToCart } = useCart();
  const t = useTranslations("product_detail");
  const tProducts = useTranslations("products");
  const tButtons = useTranslations("buttons");
  const tCart = useTranslations("cart");
  const tCommon = useTranslations("common");

  const getCategoryTranslation = (category: string) => {
    const categoryMap: Record<string, string> = {
      "Xonçalar": tProducts("categories.xoncalar"),
      "Buklet": tProducts("categories.gul"),
      "Özəl Gün Xatirəsi": tProducts("categories.ozel_gun"),
    };
    return categoryMap[category] || category;
  };

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, (title) => {
      toast.success(tCart("added", { title }), { duration: 2000 });
    });
  };

  return (
    <div className="container mx-auto max-w-7xl p-3 sm:p-4 pt-12 sm:pt-16 md:pt-28">
      {/* Breadcrumbs */}
      <div className="flex items-center text-xs sm:text-sm text-stone-500 gap-0.5 sm:gap-1 mb-4 sm:mb-6 flex-wrap">
        <Link href="/" className="hover:text-[rgb(58,42,31)]">
          {tProducts("breadcrumb_home")}
        </Link>
        <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        <Link href="/products" className="hover:text-[rgb(58,42,31)]">
          {tProducts("breadcrumb_products")}
        </Link>
        <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        <span className="text-[rgb(58,42,31)] font-medium text-xs sm:text-sm truncate max-w-[150px] sm:max-w-none">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-8 items-start">
        {/* Image Gallery */}
        <div className="w-full flex flex-col gap-3 sm:gap-4 rounded-xl">
          <div className="aspect-square w-full overflow-hidden rounded-lg sm:rounded-xl border border-stone-200 shadow-sm p-2 sm:p-3 md:p-4">
            <Image
              src={product.gallery_images[selectedImage]}
              alt={product.title}
              width={800}
              height={800}
              className="w-full h-full object-contain transition-opacity duration-300"
            />
          </div>
          <div className="grid grid-cols-5 gap-1.5 sm:gap-2 md:gap-4">
            {product.gallery_images.map((imgSrc, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`aspect-square w-full overflow-hidden rounded-md sm:rounded-lg border-2 transition-all p-0.5 sm:p-1 ${
                  selectedImage === index
                    ? "border-[rgb(58,42,31)] scale-105"
                    : "border-stone-200 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={`${product.title} gallery ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-3 sm:gap-4 bg-[#FAF7F2] h-full justify-between p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl">
          <span className="text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-[#D4A85F]/20 text-[rgb(58,42,31)] self-start">
            {getCategoryTranslation(product.category)}
          </span>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[rgb(58,42,31)] leading-tight sm:leading-normal">
            {product.title}
          </h1>
          <div className="flex items-baseline gap-2 sm:gap-3 my-1 sm:my-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[rgb(58,42,31)]">
              {product.price.toFixed(2)} {tCommon("currency")}
            </span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-stone-700 mt-1 sm:mt-2">
            {product.long_description}
          </p>
          <div className="mt-3 sm:mt-4">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 text-[rgb(58,42,31)]">
              {t("specs_title")}
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {product.specs.map((spec) => (
                <li key={spec.key} className="flex items-start sm:items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4A85F] flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="font-medium text-[rgb(58,42,31)]">{spec.key}:</span>
                  <span className="text-stone-700 break-words">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-3 sm:my-4 border-t border-stone-200" />

          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 w-full">
            <div className="flex items-center justify-center rounded-full border border-stone-300 p-0.5 sm:p-1 md:p-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-1.5 sm:p-2 rounded-full text-stone-600 hover:bg-stone-100 transition-colors disabled:opacity-50"
                disabled={quantity === 1}
              >
                <Minus className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>
              <span className="w-10 sm:w-12 text-center text-base sm:text-lg font-semibold text-[rgb(58,42,31)]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-1.5 sm:p-2 rounded-full text-stone-600 hover:bg-stone-100 transition-colors"
              >
                <Plus className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>
            </div>

            <Button
              size="lg"
              className="flex-1 w-full text-xs sm:text-sm md:text-lg py-3 sm:py-4 md:py-6 bg-[rgb(58,42,31)] text-[#F3E8D2] font-semibold hover:bg-[rgb(58,42,31)]/90 transition-colors rounded-lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
              {tButtons("add_to_cart")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
