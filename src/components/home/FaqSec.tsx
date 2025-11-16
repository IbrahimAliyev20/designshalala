"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "../shared/container";
import { useTranslations } from "next-intl";

export function FaqSec() {
  const t = useTranslations("faq");

  const faqData = [
    {
      id: "item-1",
      question: t("q1"),
      answer: t("a1"),
    },
    {
      id: "item-2",
      question: t("q2"),
      answer: t("a2"),
    },
    {
      id: "item-3",
      question: t("q3"),
      answer: t("a3"),
    },
    {
      id: "item-4",
      question: t("q4"),
      answer: t("a4"),
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-12">
            {t("subtitle")}
          </p>
        </div>

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
