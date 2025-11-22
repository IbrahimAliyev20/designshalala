"use client";

import Image from "next/image";
import { Product } from "@/utils/product";
import { useCart } from "@/context/CartContext";
import {
  CardFlip,
  CardFlipFront,
  CardFlipBack,
  CardFlipHeader,
  CardFlipFooter,
  CardFlipTitle,
  CardFlipDescription,
  CardFlipContent,
} from "@/components/ui/card-flip";
import { Box, ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Link } from "@/i18n/navigation";
type CardProductProps = {
  product: Product;
};

export function CardProduct({ product }: CardProductProps) {
  const { addToCart } = useCart();
  const t = useTranslations("products");
  const tButtons = useTranslations("buttons");
  const tCart = useTranslations("cart");
  const tCommon = useTranslations("common");

  const getCategoryTranslation = (category: string) => {
    const categoryMap: Record<string, string> = {
      "Xonçalar": t("categories.xoncalar"),
      "Buklet": t("categories.gul"),
      "Özəl Gün Xatirəsi": t("categories.ozel_gun"),
    };
    return categoryMap[category] || category;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, (title) => {
      toast.success(tCart("added", { title }), { duration: 2000 });
    });
  };

  return (
    <CardFlip className="w-full max-w-sm select-none h-full flex flex-col ">
      <CardFlipFront className="flex flex-col justify-between h-full md:h-auto py-0">
        <div className="w-full h-48 sm:h-56 md:h-64 rounded-t-lg overflow-hidden">
          <Link href={`/products/${product.slug}`} className="relative w-full h-full block">
            <Image
              src={product.main_image}
              alt={product.title}
              fill
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

        <div className="flex items-center justify-between px-3 sm:px-4 mt-2">
          <span className="bg-[#D4A85F]/20 text-[rgb(58,42,31)] text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
            {getCategoryTranslation(product.category)}
          </span>
        </div>

        <CardFlipHeader className="px-3 sm:px-4 pt-2">
          <CardFlipTitle className="text-[rgb(58,42,31)] text-base sm:text-lg md:text-xl line-clamp-1 mb-2">{product.title}</CardFlipTitle>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(58,42,31)]">{product.price} {tCommon("currency")}</p>
        </CardFlipHeader>

        <CardFlipContent className="flex-1 overflow-auto px-3 sm:px-4 py-2">
          <p className="text-sm sm:text-base text-stone-600 line-clamp-1 leading-relaxed">
            {product.short_description}
          </p>
        </CardFlipContent>

        <CardFlipFooter className="flex gap-2 sm:gap-4 items-stretch px-3 sm:px-4 pb-3 sm:pb-4">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 bg-[rgb(58,42,31)] py-1.5 sm:py-1 text-white px-2 sm:px-4 rounded-lg hover:bg-[rgb(58,42,31)]/90 transition-colors flex items-center justify-center text-xs sm:text-sm font-semibold"
          >
            {tButtons("view_details")}
          </Link>
          <button
            onClick={handleAddToCart}
            aria-label={tButtons("add_to_cart")}
            className="w-10 sm:w-12 bg-[rgb(58,42,31)] py-1.5 sm:py-1 text-white rounded-lg hover:bg-[rgb(58,42,31)]/90 transition-colors flex items-center justify-center"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </CardFlipFooter>
      </CardFlipFront>

      <CardFlipBack className="h-full flex flex-col">
        <CardFlipHeader className="px-3 sm:px-4">
          <CardFlipTitle className="text-[rgb(58,42,31)] text-sm sm:text-base md:text-lg">{product.title}</CardFlipTitle>
          <CardFlipDescription className="text-stone-600 text-xs sm:text-sm">{product.short_description}</CardFlipDescription>
        </CardFlipHeader>

        <CardFlipContent className="flex-1 overflow-auto space-y-3 sm:space-y-4 px-3 sm:px-4">
          {product.specs && product.specs.length > 0 ? (
            product.specs.map((spec) => (
              <div className="flex items-start gap-2 sm:gap-3" key={spec.key}>
                <Box className="text-[#D4A85F] w-5 h-5 sm:w-6 sm:h-6 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-[rgb(58,42,31)] text-xs sm:text-sm md:text-base">{spec.key}</h4>
                  <p className="text-xs sm:text-sm text-stone-600 break-words">{spec.value}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs sm:text-sm text-stone-600 px-2 sm:px-4">
              {t("no_specs")}
            </p>
          )}
        </CardFlipContent>
        
        <CardFlipFooter className="border-t px-3 sm:px-4 pb-3 sm:pb-4">
          <p className="text-[10px] sm:text-xs mt-3 sm:mt-4 text-stone-600">{t("for_special_days")}</p>
        </CardFlipFooter>
      </CardFlipBack>
    </CardFlip>
  );
}
