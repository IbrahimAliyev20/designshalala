"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

// --- Brend Palitrası (Referans üçün) ---
// Tünd Qəhvəyi: rgb(58, 42, 31)
// Krem: #F3E8D2
// İsti Bej (Fon): #FAF7F2
// İsti Boz (Mətn): text-stone-700 / 600
// İsti Açıq Boz (Mətn): text-stone-500
// İsti Border: border-stone-200
// ----------------------------------------

export default function BasketPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  const handleCheckout = () => {
    // ... (bu funksiya toxunulmaz qalıb, düzgün işləyir) ...
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

    const link = document.createElement("a");
    link.href = whatsappURL;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // DƏYİŞİKLİK: Arxa fon 'bg-gray-50' -> 'bg-[#FAF7F2]' (isti bej)
    <div className=" bg-[#FAF7F2] py-8 px-4">
      <div className="max-w-7xl mx-auto pt-16 md:pt-20">
        {/* DƏYİŞİKLİK: Başlıq rəngi 'text-gray-900' -> brendin tünd qəhvəyi rəngi */}
        <h1 className="text-2xl md:text-4xl font-bold text-[rgb(58,42,31)] mb-6 md:mb-8 tracking-tight">
          SƏBƏTİNİZ
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              // === BOŞ SƏBƏT ===
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 text-center">
                {/* DƏYİŞİKLİK: 'text-gray-500' -> 'text-stone-500' */}
                <p className="text-lg text-stone-500">Səbətiniz boşdur.</p>
                <Link href="/products">
                  {/* DƏYİŞİKLİK: Qara düymə brendin əsas düyməsi ilə əvəz edildi */}
                  <p className="inline-block mt-4 bg-[rgb(58,42,31)] text-[#F3E8D2] py-3 px-6 rounded-full font-semibold hover:bg-[rgb(58,42,31)]/90 transition-colors">
                    Məhsullara Bax
                  </p>
                </Link>
              </div>
            ) : (
              // === DOLU SƏBƏT ===
              cartItems.map((item) => (
                <div
                  key={item.id}
                  // DƏYİŞİKLİK: 'border-gray-100' -> 'border-stone-200'
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-200 transition-shadow hover:shadow-md"
                >
                  <div className="flex gap-4">
                    {/* DƏYİŞİKLİK: 'bg-gray-100' -> 'bg-stone-50' */}
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-stone-50 flex-shrink-0">
                      <Image
                        src={item.main_image}
                        alt={item.title}
                        width={112}
                        height={112}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        {/* DƏYİŞİKLİK: 'text-gray-900' -> brend rəngi */}
                        <h3 className="text-base md:text-xl font-semibold text-[rgb(58,42,31)] truncate pr-2">
                          {item.title}
                        </h3>
                        {/* Qeyd: Silmə düyməsi (qırmızı) konvensiya olaraq qala bilər */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 p-1 md:p-2 -mt-1 md:-mt-2 -mr-1 md:-mr-2 transition-colors cursor-pointer"
                          aria-label="Məhsulu sil"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="space-y-1 mb-3">
                        {/* DƏYİŞİKLİK: 'text-gray-600' -> 'text-stone-600', 'text-gray-900' -> 'text-stone-700' */}
                        <p className="text-sm text-stone-600">
                          Kateqoriya:{" "}
                          <span className="text-stone-700">{item.category}</span>{" "}
                        </p>
                      </div>

                      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
                        {/* DƏYİŞİKLİK: 'text-gray-900' -> brend rəngi */}
                        <p className="text-xl md:text-2xl font-bold text-[rgb(58,42,31)]">
                          {item.price.toFixed(2)} AZN
                        </p>
                        {/* DƏYİŞİKLİK: Sayğacın rəngləri istiləşdirildi */}
                        <div className="flex items-center gap-2 md:gap-3 bg-stone-100 rounded-full px-3 py-1.5 md:px-4 md:py-2 self-end md:self-auto">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-stone-600 hover:text-stone-900 transition-colors w-6 h-6 flex items-center justify-center cursor-pointer"
                            aria-label="Sayını azalt"
                            disabled={item.quantity === 1}
                          >
                            <span className="text-xl font-medium">−</span>
                          </button>
                          {/* DƏYİŞİKLİK: 'text-gray-900' -> brend rəngi */}
                          <span className="text-[rgb(58,42,31)] font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-stone-600 hover:text-stone-900 transition-colors w-6 h-6 flex items-center justify-center cursor-pointer"
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

          {/* === SAĞ SÜTUN: SİFARİŞ XÜLASƏSİ === */}
          <div className="md:col-span-1">
            {/* DƏYİŞİKLİK: Rənglər istiləşdirildi */}
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-200 md:sticky md:top-28">
              <h2 className="text-xl md:text-2xl font-bold text-[rgb(58,42,31)] mb-6">
                Sifariş Xülasəsi
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-stone-600">
                  <span>Cəmi</span>
                  <span className="font-semibold text-[rgb(58,42,31)]">
                    {subtotal.toFixed(2)} AZN
                  </span>
                </div>

                <div className="border-t border-stone-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base md:text-lg font-medium text-[rgb(58,42,31)]">
                      Yekun Məbləğ
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-[rgb(58,42,31)]">
                      {total.toFixed(2)} AZN
                    </span>
                  </div>
                </div>
              </div>

              {/* DƏYİŞİKLİK: Qara düymə brendin əsas düyməsi ilə əvəz edildi */}
              <button
                onClick={handleCheckout}
                className="w-full bg-[rgb(58,42,31)] text-[#F3E8D2] py-3 md:py-4 rounded-full font-semibold hover:bg-[rgb(58,42,31)]/90 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
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