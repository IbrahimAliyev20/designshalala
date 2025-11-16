import Image from "next/image";
import Container from "../shared/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function ContactCTA() {
  const t = await getTranslations("cta");
  const tButtons = await getTranslations("buttons");

  return (
    <section className="relative py-8 sm:py-10 md:py-20 overflow-hidden">
      <Image
        src="/images/ctabg.png"
        alt="Contact"
        width={1920}
        height={600}
        className="absolute inset-0 z-0 w-full h-full object-cover"
        priority
      />
      
      <div className="absolute inset-0 bg-[rgb(58,42,31)]/60 z-10" />

      <Container>
        <div className="relative z-20 text-center flex flex-col items-center px-4 sm:px-6 md:px-4">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-[#f3ede2] tracking-tight leading-tight sm:leading-normal">
            {t("title")}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-xl max-w-2xl mx-auto text-[#f3ede2]/90 px-2 sm:px-0">
            {t("subtitle")}
          </p>

          <Button
            asChild
            size="lg"
            className="mt-6 sm:mt-8 md:mt-10 py-3 sm:py-4 md:py-6 px-5 sm:px-6 md:px-8 text-xs sm:text-sm md:text-lg bg-[#d6b98b] text-[#3a2a1f] font-semibold hover:bg-[#d6b98b]/90 transition-colors rounded-lg"
          >
            <Link href="/contact" className="flex items-center gap-1.5 sm:gap-2">
              {tButtons("contact_now")}
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
