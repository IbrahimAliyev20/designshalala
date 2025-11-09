"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from "@/utils/product";
import { Heart } from "lucide-react";
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
    <Card className="rounded-xl overflow-hidden group relative h-full flex flex-col gap-0 p-0 shadow-none">
      <div className="relative w-full overflow-hidden h-[250px]">
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 right-4 z-10 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 border border-white/40 transition-all"
        >
          <Heart className="h-5 w-5 text-white" />
        </Button>

        <Link href={`/products/${product.slug}`} className="h-full">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={product.main_image}
              alt={product.title}
              width={600}
              height={500}
              className="object-cover relative w-full h-full"
            />
            <div className="absolute top-5 left-3 flex gap-2 mb-2">
              <span className="border-2 border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-gray-700">
                {product.category}
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="pt-2 p-3 flex flex-col flex-1 bg-white">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-gray-700 transition-colors line-clamp-1">
            {product.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {product.short_description}
        </p>

        <div className="flex-1" />
        <div className="flex justify-between items-center mt-auto">
          <div>
            <p className="text-xs text-gray-500 font-semibold mb-1">Qiymət</p>
            <p className="text-2xl font-semibold text-gray-900">
              {product.price} AZN
            </p>
          </div>

          <RainbowButton
            variant="default"
            className="pointer-events-auto z-20"
            onClick={handleAddToCart}
          >
            Səbətə at
          </RainbowButton>
        </div>
      </div>
    </Card>
  );
}
