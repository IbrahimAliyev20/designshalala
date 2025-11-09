"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "../shared/container"; // Sizin Container komponentiniz

// Sizin biznesinizə uyğun sual-cavab datası
const faqData = [
  {
    id: "item-1",
    question: "Sifarişi necə verə bilərəm?",
    answer:
      "Sifariş vermək çox asandır! Bəyəndiyiniz məhsulu səbətə əlavə edib, səbət səhifəsindən 'Ödənişə Keç' düyməsinə basaraq WhatsApp vasitəsilə bizimlə birbaşa əlaqə saxlaya bilərsiniz.",
  },
  {
    id: "item-2",
    question: "Məhsullar əl işidir?",
    answer:
      "Bəli, 'Designed Shalala'-dakı hər bir kompozisiya – xonçalar, gül buketləri və şokolad qutuları – xüsusi diqqət və sevgi ilə tamamilə əl ilə hazırlanır. Bu, hər məhsulun unikal olması deməkdir.",
  },
  {
    id: "item-3",
    question: "Xüsusi dizayn sifariş etmək mümkündürmü?",
    answer:
      "Əlbəttə! Bizim əsas işimiz sizin xəyallarınızdakı dizaynı gerçəkləşdirməkdir. 'Əlaqə' səhifəmizdən bizimlə əlaqə saxlayın, ideyalarınızı bölüşün, biz də sizin üçün unikal bir kompozisiya yaradaq.",
  },
  {
    id: "item-4",
    question: "Sifarişi nə qədər müddət əvvəl vermək lazımdır?",
    answer:
      "Xüsusilə böyük xonça və kompleks dizaynlar üçün toy və ya nişan tarixinizdən ən azı 1-2 həftə əvvəl sifariş verməyiniz məsləhətdir. Kiçik hədiyyələr üçün 2-3 gün əvvəldən sifariş adətən kifayət edir.",
  },
];

export function FaqSec() {
  return (
    <section className="py-16 md:py-24  ">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tez-tez Verilən Suallar
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-12">
            Sifariş, çatdırılma və məhsullarımız haqqında ən çox maraq 
            doğuran sualların cavabları.
          </p>
        </div>

        {/* Akkordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq) => (
              <AccordionItem 
                value={faq.id} 
                key={faq.id}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="text-base md:text-lg text-left font-semibold text-gray-800 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}