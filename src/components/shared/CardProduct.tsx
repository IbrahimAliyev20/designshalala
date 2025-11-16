"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/utils/product"; // Sizin Product tipiniz
import { useCart } from "@/context/CartContext"; // Sizin Cart context-iniz

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

type CardProductProps = {
  product: Product;
};



export function CardProduct({ product }: CardProductProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <CardFlip className="w-full max-w-sm select-none h-full">
      <CardFlipFront className="flex flex-col justify-between h-auto">
        <div className="mx-4 mt-4 h-48 w-[calc(100%-2rem)] rounded-lg overflow-hidden">
          <Link href={`/products/${product.slug}`} className="relative w-full h-full block">
            <Image
              src={product.main_image}
              alt={product.title}
              fill
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

        <div className=" flex items-center justify-between px-4 ">
          {/* DƏYİŞİKLİK: 'primary' teq rəngi qızılı/qəhvəyi ilə əvəz edildi */}
          <span className="bg-[#D4A85F]/20 text-[rgb(58,42,31)] text-xs font-semibold px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <CardFlipHeader>
          {/* DƏYİŞİKLİK: Başlıq rəngi brendə uyğunlaşdırıldı */}
          <CardFlipTitle className="text-[rgb(58,42,31)]">{product.title}</CardFlipTitle>
          {/* DƏYİŞİKLİK: Qiymət rəngi brendə uyğunlaşdırıldı */}
          <p className="text-2xl font-bold text-[rgb(58,42,31)]">{product.price} AZN</p>
        </CardFlipHeader>

        <CardFlipContent className="flex-1 overflow-auto">
          {/* DƏYİŞİKLİK: Mətn rəngi 'muted-foreground' əvəzinə daha isti 'stone-600' oldu */}
          <p className="text-sm text-stone-600 line-clamp-2">
            {product.short_description}
          </p>
        </CardFlipContent>

        <CardFlipFooter className="flex gap-4 items-stretch">
          {/* DƏYİŞİKLİK: 'primary' düymə rəngi brendin qəhvəyi/krem rəngləri ilə əvəz edildi */}
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 bg-[rgb(58,42,31)] py-1 text-[#F3E8D2] px-4 rounded-lg hover:bg-[rgb(58,42,31)]/90 transition-colors flex items-center justify-center"
          >
            Ətraflı
          </Link>
          {/* DƏYİŞİKLİK: 'primary' düymə rəngi brendin qəhvəyi/krem rəngləri ilə əvəz edildi */}
          <button
            onClick={handleAddToCart}
            aria-label="Səbətə at"
            className="w-12 bg-[rgb(58,42,31)] py-1 text-[#F3E8D2] rounded-lg hover:bg-[rgb(58,42,31)]/90 transition-colors flex items-center justify-center"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </CardFlipFooter>
      </CardFlipFront>

      <CardFlipBack className="h-full flex flex-col">
        <CardFlipHeader>
          {/* DƏYİŞİKLİK: Arxa tərəfin rəngləri */}
          <CardFlipTitle className="text-[rgb(58,42,31)]">{product.title}</CardFlipTitle>
          <CardFlipDescription className="text-stone-600">{product.short_description}</CardFlipDescription>
        </CardFlipHeader>

        <CardFlipContent className="flex-1 overflow-auto space-y-4">
          {product.specs && product.specs.length > 0 ? (
            product.specs.map((spec) => (
              <div className="flex items-start gap-3" key={spec.key}>
                {/* DƏYİŞİKLİK: İkon rəngi 'primary' əvəzinə brendin qızılı vurğu rəngi oldu */}
                <Box className="text-[#D4A85F] w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  {/* DƏYİŞİKLİK: Arxa tərəfin rəngləri */}
                  <h4 className="font-semibold text-[rgb(58,42,31)]">{spec.key}</h4>
                  <p className="text-sm text-stone-600">{spec.value}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-stone-600 px-4">
              Bu məhsul üçün əlavə xüsusiyyət yoxdur.
            </p>
          )}
        </CardFlipContent>
        
        <CardFlipFooter className="border-t">
          <p className="text-xs mt-4 text-stone-600">Xüsusi günləriniz üçün</p>
        </CardFlipFooter>
      </CardFlipBack>
    </CardFlip>
  );
} 