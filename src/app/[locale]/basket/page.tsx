"use client";

import Image from "next/image";
import { Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Link } from "@/i18n/navigation";

export default function BasketPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const t = useTranslations("basket");
  const tButtons = useTranslations("buttons");
  const tCart = useTranslations("cart");
  const tProducts = useTranslations("products");

  const getCategoryTranslation = (category: string) => {
    const categoryMap: Record<string, string> = {
      "Xonçalar": tProducts("categories.xoncalar"),
      "Buklet": tProducts("categories.gul"),
      "Özəl Gün Xatirəsi": tProducts("categories.ozel_gun"),
    };
    return categoryMap[category] || category;
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  const handleCheckout = () => {
    const phoneNumber = "994993291807";
    let message = t("checkout_message") + "\n";

    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      message += `${t("checkout_item")} ${item.title}\n`;
      message += `${t("checkout_quantity")} ${item.quantity}\n`;
      message += `${t("checkout_price")} ${itemTotal.toFixed(2)} ${t("currency")}\n`;
      message += "--------------------------\n";
    });

    message += `\n${t("checkout_total")} ${total.toFixed(2)} ${t("currency")}*`;

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
    <div className="bg-[#FAF7F2] py-4 sm:py-6 md:py-8 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto pt-12 sm:pt-16 md:pt-20">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[rgb(58,42,31)] mb-4 sm:mb-6 md:mb-8 tracking-tight px-1 sm:px-0">
          {t("title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          <div className="md:col-span-2 space-y-3 sm:space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-stone-200 text-center">
                <p className="text-base sm:text-lg text-stone-500">{t("empty")}</p>
                <Link href="/products">
                  <p className="inline-block mt-3 sm:mt-4 bg-[rgb(58,42,31)] text-[#F3E8D2] py-2.5 sm:py-3 px-5 sm:px-6 rounded-full font-semibold hover:bg-[rgb(58,42,31)]/90 transition-colors text-sm sm:text-base">
                    {t("view_products")}
                  </p>
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm border border-stone-200 transition-shadow hover:shadow-md"
                >
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg sm:rounded-xl overflow-hidden bg-stone-50 flex-shrink-0">
                      <Image
                        src={item.main_image}
                        alt={item.title}
                        width={112}
                        height={112}
                        className="w-full h-full object-contain p-1.5 sm:p-2"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold text-[rgb(58,42,31)] truncate pr-1 sm:pr-2">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id, (title) => {
                            toast.error(tCart("removed", { title }), { duration: 2000 });
                          })}
                          className="text-red-500 hover:text-red-700 p-0.5 sm:p-1 md:p-2 -mt-0.5 sm:-mt-1 md:-mt-2 -mr-0.5 sm:-mr-1 md:-mr-2 transition-colors cursor-pointer flex-shrink-0"
                          aria-label={t("remove")}
                        >
                          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>

                      <div className="space-y-0.5 sm:space-y-1 mb-2 sm:mb-3">
                        <p className="text-xs sm:text-sm text-stone-600">
                          {t("category")}{" "}
                          <span className="text-stone-700">{getCategoryTranslation(item.category)}</span>
                        </p>
                      </div>

                      <div className="flex flex-col items-start gap-2 sm:gap-3 md:flex-row md:items-center md:justify-between">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(58,42,31)]">
                          {item.price.toFixed(2)} {t("currency")}
                        </p>
                        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-stone-100 rounded-full px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 self-end md:self-auto">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-stone-600 hover:text-stone-900 transition-colors w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center cursor-pointer"
                            aria-label={t("decrease")}
                            disabled={item.quantity === 1}
                          >
                            <span className="text-lg sm:text-xl font-medium">−</span>
                          </button>
                          <span className="text-[rgb(58,42,31)] font-medium w-6 sm:w-8 text-center text-sm sm:text-base">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-stone-600 hover:text-stone-900 transition-colors w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center cursor-pointer"
                            aria-label={t("increase")}
                          >
                            <span className="text-lg sm:text-xl font-medium">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm border border-stone-200 md:sticky md:top-28">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(58,42,31)] mb-4 sm:mb-5 md:mb-6">
                {t("order_summary")}
              </h2>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5 md:mb-6">
                <div className="flex justify-between text-sm sm:text-base text-stone-600">
                  <span>{t("subtotal")}</span>
                  <span className="font-semibold text-[rgb(58,42,31)] text-sm sm:text-base">
                    {subtotal.toFixed(2)} {t("currency")}
                  </span>
                </div>

                <div className="border-t border-stone-200 pt-3 sm:pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base md:text-lg font-medium text-[rgb(58,42,31)]">
                      {t("total")}
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(58,42,31)]">
                      {total.toFixed(2)} {t("currency")}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-[rgb(58,42,31)] text-[#F3E8D2] py-2.5 sm:py-3 md:py-4 rounded-full font-semibold hover:bg-[rgb(58,42,31)]/90 transition-colors flex items-center justify-center gap-1.5 sm:gap-2 group cursor-pointer text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={cartItems.length === 0}
              >
                <span>{t("checkout")}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
