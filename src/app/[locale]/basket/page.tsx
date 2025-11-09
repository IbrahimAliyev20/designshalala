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

    window.location.href = whatsappURL;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto pt-16 md:pt-20"> {/* Mobil pt azaldıldı */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 tracking-tight">
          SƏBƏTİNİZ
        </h1>
        {/* Dəyişiklik: lg:grid-cols-3 -> md:grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dəyişiklik: lg:col-span-2 -> md:col-span-2 */}
          <div className="md:col-span-2 space-y-4">
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
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 transition-shadow hover:shadow-md"
                >
                  <div className="flex gap-4">
                    {/* Dəyişiklik: w-20 h-20 md:w-28 md:h-28 */}
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
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
                        {/* Dəyişiklik: text-base md:text-xl */}
                        <h3 className="text-base md:text-xl font-semibold text-gray-900 truncate pr-2">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 p-1 -mt-1 -mr-1 md:p-2 md:-mt-2 md:-mr-2 transition-colors"
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

                      {/* Dəyişiklik: flex-col md:flex-row */}
                      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
                        {/* Dəyişiklik: text-xl md:text-2xl */}
                        <p className="text-xl md:text-2xl font-bold text-gray-900">
                          {item.price.toFixed(2)} AZN
                        </p>

                        {/* Dəyişiklik: px-3 py-1.5 md:px-4 md:py-2 */}
                        <div className="flex items-center gap-2 md:gap-3 bg-gray-100 rounded-full px-3 py-1.5 md:px-4 md:py-2">
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
          
          {/* Dəyişiklik: lg:col-span-1 -> md:col-span-1 */}
          <div className="md:col-span-1">
            {/* Dəyişiklik: Səbət dolu olduqda mobildə sticky olmur, desktopda olur */}
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 md:sticky md:top-28">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
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
                    <span className="text-base md:text-lg font-medium text-gray-900">
                      Yekun Məbləğ
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-gray-900">
                      {total.toFixed(2)} AZN
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 md:py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
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