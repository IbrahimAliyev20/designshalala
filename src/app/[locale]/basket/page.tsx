"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function BasketPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  const handleCheckout = () => {
    const phoneNumber = "994993291807"; 

    let message = "Salam! Sifariş etmək istəyirəm:\n\n";
    message += "Mənim Sifarişlərim:\n";
    message += "--------------------------\n";

    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      message += `Məhsul: ${item.title}\n`;
      message += `Say: ${item.quantity}\n`;
      message += `Qiymət: ${itemTotal.toFixed(2)} AZN\n`;
      message += "--------------------------\n";
    });

    message += `\n*Yekun Məbləğ: ${total.toFixed(2)} AZN*`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
          SƏBƏTİNİZ
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <p className="text-lg text-gray-500">Səbətiniz boşdur.</p>
                <Link href="/products" legacyBehavior>
                  <a className="inline-block mt-4 bg-black text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                    Məhsullara Bax
                  </a>
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-shadow hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={item.main_image}
                        alt={item.title}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate pr-2">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 p-2 -mt-2 -mr-2 transition-colors"
                          aria-label="Məhsulu sil"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="space-y-1 mb-3">
                        <p className="text-sm text-gray-600">
                          Kateqoriya:{" "}
                          <span className="text-gray-900">{item.category}</span>{" "}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-gray-900">
                          {item.price.toFixed(2)} AZN
                        </p>

                        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-gray-600 hover:text-gray-900 transition-colors w-6 h-6 flex items-center justify-center"
                            aria-label="Sayını azalt"
                            disabled={item.quantity === 1}
                          >
                            <span className="text-xl font-medium">−</span>
                          </button>
                          <span className="text-gray-900 font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-gray-600 hover:text-gray-900 transition-colors w-6 h-6 flex items-center justify-center"
                            aria-label="Sayını artır"
                          >
                            <span className="text-xl font-medium">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Sifariş Xülasəsi
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Cəmi</span>
                  <span className="font-semibold text-gray-900">
                    {subtotal.toFixed(2)} AZN
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">
                      Yekun Məbləğ
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {total.toFixed(2)} AZN
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout} 
                className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
                disabled={cartItems.length === 0} 
              >
                <span>Ödənişə Keç</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}