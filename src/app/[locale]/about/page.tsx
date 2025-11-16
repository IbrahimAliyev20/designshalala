import Image from "next/image";
import { Check, Sparkles, HandHeart } from "lucide-react";
import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <div className="bg-white text-stone-700">
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center pt-16 sm:pt-20">
        <Image
          src="/images/ctabg.png"
          alt="About background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover absolute inset-0 z-0"
          priority
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

      <section className="py-8 sm:py-12 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center">
            <div className="text-sm sm:text-base md:text-lg text-stone-700 space-y-3 sm:space-y-4 leading-relaxed px-4 sm:px-6 md:px-0">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 text-[rgb(58,42,31)]">
                {t("story_title")}
              </h2>
              <p className="text-sm sm:text-base md:text-lg">{t("story_p1")}</p>
              <p className="text-sm sm:text-base md:text-lg">{t("story_p2")}</p>
              <p className="font-semibold text-[rgb(58,42,31)] pt-1 sm:pt-2 text-sm sm:text-base md:text-lg">
                {t("story_p3")}
              </p>
            </div>
            
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/bgaboutsec.jpg"
                alt="Handcraft process"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-12 md:py-24">
        <Container>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-[rgb(58,42,31)] px-4 sm:px-0">
            {t("process_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center px-4 sm:px-0">
            <div className="flex flex-col items-center p-3 sm:p-4">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#D4A85F]/20 text-[rgb(58,42,31)] mb-3 sm:mb-4">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[rgb(58,42,31)]">
                {t("process_step1_title")}
              </h3>
              <p className="text-sm sm:text-base text-stone-700">{t("process_step1_desc")}</p>
            </div>

            <div className="flex flex-col items-center p-3 sm:p-4">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#D4A85F]/20 text-[rgb(58,42,31)] mb-3 sm:mb-4">
                <HandHeart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[rgb(58,42,31)]">
                {t("process_step2_title")}
              </h3>
              <p className="text-sm sm:text-base text-stone-700">{t("process_step2_desc")}</p>
            </div>

            <div className="flex flex-col items-center p-3 sm:p-4">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#D4A85F]/20 text-[rgb(58,42,31)] mb-3 sm:mb-4">
                <Check className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[rgb(58,42,31)]">
                {t("process_step3_title")}
              </h3>
              <p className="text-sm sm:text-base text-stone-700">{t("process_step3_desc")}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-12 md:py-24 text-center">
        <Container>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6 text-[rgb(58,42,31)] px-4 sm:px-0">
            {t("cta_title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-stone-700 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            {t("cta_text")}
          </p>
          
          <Button 
            asChild
            size="lg"
            className="py-3 sm:py-4 md:py-6 px-5 sm:px-6 md:px-8 text-xs sm:text-sm md:text-lg bg-[rgb(58,42,31)] text-[#F3E8D2] font-semibold hover:bg-[rgb(58,42,31)]/90 transition-colors rounded-lg"
          >
            <Link href="/contact">{t("contact_now", { ns: "buttons" })}</Link>
          </Button>
        </Container>
      </section>
    </div>
  );
}
