"use client";

import Image from "next/image";
import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tButtons = useTranslations("buttons");

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "994993291807";
    const message = t("whatsapp_message");
    
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
    <div className="bg-white text-stone-700">
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center pt-16 sm:pt-20 overflow-hidden">
        <Image
          src="/images/ctabg.png"
          alt="Contact background"
          width={1920}
          height={600}
          priority
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgb(58,42,31)]/60 z-10" />

        <Container>
          <div className="relative z-20 text-center text-[#F3E8D2] p-4 sm:p-6 md:p-4">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold tracking-tight leading-tight sm:leading-normal px-2 sm:px-0">
              {t("hero_title")}
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-xl max-w-2xl mx-auto text-[#F3E8D2]/90 px-2 sm:px-0">
              {t("hero_subtitle")}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-12 md:py-24 bg-[#FAF7F2]">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-[rgb(58,42,31)]">
              {t("title")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow flex flex-col border-stone-200">
                <CardHeader className="items-center text-center p-4 sm:p-6">
                  <div className="flex items-center justify-center w-full rounded-full mb-3 sm:mb-4">
                    <Image
                      src="/images/whatsapp.png"
                      alt="WhatsApp Icon"
                      width={32}
                      height={32}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-[rgb(58,42,31)]">
                    {t("whatsapp_title")}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-stone-600 mt-2 sm:mt-3">
                    {t("whatsapp_desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-end p-4 sm:p-6 pt-0">
                  <Button
                    size="lg"
                    className="w-full bg-[rgb(58,42,31)] text-[#F3E8D2] text-xs sm:text-sm md:text-base py-3 sm:py-4 md:py-6 hover:bg-[rgb(58,42,31)]/90 rounded-lg"
                    onClick={handleWhatsAppRedirect}
                  >
                    {tButtons("start_chat")}
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow flex flex-col border-stone-200">
                <CardHeader className="items-center text-center p-4 sm:p-6">
                  <div className="flex items-center justify-center w-full rounded-full mb-3 sm:mb-4">
                    <Image
                      src="/images/instagram.png"
                      alt="Instagram Icon"
                      width={32}
                      height={32}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-[rgb(58,42,31)]">
                    {t("instagram_title")}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-stone-600 mt-2 sm:mt-3">
                    {t("instagram_desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-end p-4 sm:p-6 pt-0">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#D4A85F] text-[rgb(58,42,31)] text-xs sm:text-sm md:text-base py-3 sm:py-4 md:py-6 hover:bg-[#D4A85F]/90 rounded-lg"
                  >
                    <Link
                      href="#" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tButtons("follow_us")}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
