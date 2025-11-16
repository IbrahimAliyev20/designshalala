import Image from "next/image";
import Link from "next/link";
import Container from "../shared/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="relative py-10 md:py-20 overflow-hidden">
      
      <Image
        src="/images/ctabg.png" 
        alt="Əlaqə"
        width={1920}
        height={600}
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-[rgb(58,42,31)]/60 z-10" />

      <Container>
        <div className="relative z-20 text-center flex flex-col items-center">
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#f3ede2] tracking-tight">
            Xəyalınızdakı Dizaynı Birlikdə Yaradaq
          </h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[#f3ede2]/90">
            Xüsusi xonçalar, gül buketləri və ya hədiyyə kompozisiyaları.
            İdeyalarınızı bizimlə bölüşün, biz onları gerçəkləşdirək.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-10 py-6 px-8 text-base md:text-lg
                       bg-[#d6b98b] text-[#3a2a1f] font-semibold
                       hover:bg-[#d6b98b]/90 transition-colors"
          >
            <Link href="/contact">
              İndi Əlaqə Saxlayın
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}