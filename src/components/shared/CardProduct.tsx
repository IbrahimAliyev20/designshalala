"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from "@/utils/product";
import { Heart, ShoppingCart } from "lucide-react"; 
import { RainbowButton } from "../ui/rainbow-button";

import { useCart } from "@/context/CartContext";

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
    <Card className="rounded-xl  overflow-hidden group relative h-full flex flex-col gap-0 p-0 shadow-none">
      <div className="relative w-full overflow-hidden h-[200px] md:h-[250px]">
    

        <Link href={`/products/${product.slug}`} className="h-full">
          <div className="relative w-full h-full flex items-center justify-center p-4"> {/* DƏYİŞİKLİK: Şəkilə p-4 (padding) əlavə etdim */}
            <Image
              src={product.main_image}
              alt={product.title}
              width={600}
              height={500}
              // DƏYİŞİKLİK: object-cover -> object-contain
              className="object-contain relative w-full h-full"
            />
            <div className="absolute top-3 left-3 md:top-5 md:left-3 flex gap-2 mb-2">
              <span className="border-2 border-gray-300 rounded-md px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm">
                {product.category}
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="pt-2 p-3 flex flex-col flex-1 ">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-1 md:mb-2 hover:text-gray-700 transition-colors line-clamp-1">
            {product.title}
          </h3>
        </Link>

        <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2">
          {product.short_description}
        </p>

        <div className="flex-1" />
        <div className="flex justify-between items-center mt-auto">
          <div>
            <p className="text-xs text-gray-500 font-semibold mb-0 md:mb-1">Qiymət</p>
            <p className="text-lg md:text-2xl font-semibold text-gray-900">
              {product.price} AZN
            </p>
          </div>

          <RainbowButton
            variant="default"
            className="pointer-events-auto z-20 md:w-auto w-10 h-10 p-0 md:px-4 md:py-2 md:h-auto" 
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-5 h-5 md:hidden" />
            <span className="hidden md:block">Səbətə at</span>
          </RainbowButton>
        </div>
      </div>
    </Card>
  );
}