"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { ShoppingCart, Plus, Minus, ChevronRight, Check } from "lucide-react";

import products from "@/utils/product";
import { Button } from "@/components/ui/button"; // DƏYİŞİKLİK
import Link from "next/link";

import { useCart } from "@/context/CartContext";

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
    <div className="container mx-auto max-w-7xl p-4 pt-20 md:pt-28">
      <div className="flex items-center text-sm text-gray-500 gap-1 mb-6">
        <Link href="/" className="hover:text-gray-800">
          Ana Səhifə
        </Link>
        <ChevronRight size={14} />
        <Link href="/products" className="hover:text-gray-800">
          Məhsullar
        </Link>
        <ChevronRight size={14} />
        <span className="text-gray-800 font-medium">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
        
        <div className="w-full flex flex-col gap-4 rounded-xl">
          <div className="aspect-square w-full overflow-hidden rounded-xl border shadow-sm p-4">
            <Image
              src={product.gallery_images[selectedImage]}
              alt={product.title}
              width={800}
              height={800}
              className="w-full h-full object-contain transition-opacity duration-300"
              priority
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
                                ? "border-blue-600 scale-105"
                                : "border-gray-200 opacity-70 hover:opacity-100"
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

        {/* DƏYİŞİKLİK: 'justify-between' silindi, h-full silindi, bg-green silindi */}
        <div className="flex flex-col gap-4 p-0 md:p-6 rounded-xl">
          <span className="text-sm font-medium text-blue-600">
            {product.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            {product.title}
          </h1>
          <div className="flex items-baseline gap-3 my-2">
            <span className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.price.toFixed(2)} AZN
            </span>
          </div>
          <p className="text-base leading-relaxed text-gray-600 mt-2">
            {product.long_description}
          </p>
          <div className="mt-4">
            <h3 className="text-base md:text-lg font-semibold mb-3">Xüsusiyyətlər:</h3>
            <ul className="space-y-2">
              {product.specs.map((spec) => (
                <li key={spec.key} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-600" />
                  <span className="font-medium text-gray-800">{spec.key}:</span>
                  <span className="text-gray-600">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-4 border-t border-gray-200" />

          {/* DƏYİŞİKLİK: Mobil üçün flex-col */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex items-center justify-center rounded-full border border-gray-300 p-1 md:p-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
                disabled={quantity === 1}
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center text-lg font-semibold text-gray-900">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>

            {/* DƏYİŞİKLİK: RainbowButton -> standart Button */}
            <Button
              variant="default"
              className="flex-1 w-full text-base md:text-lg py-5 md:py-6"
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