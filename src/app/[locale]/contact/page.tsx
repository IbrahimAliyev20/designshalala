"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// --- Brend Palitrası (Referans üçün) ---
// Tünd Qəhvəyi: rgb(58, 42, 31)
// Krem: #F3E8D2
// Qızılı: #D4A85F
// İsti Bej (Fon): #FAF7F2
// İsti Boz (Mətn): text-stone-700
// ----------------------------------------

export default function ContactPage() {
  const handleWhatsAppRedirect = () => {
    // ... (bu funksiya toxunulmaz qalıb, düzgün işləyir) ...
    const phoneNumber = "994993291807";
    const message = "Salam! Xüsusi sifarişlə bağlı sualım var.";
    
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
      
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center pt-20 overflow-hidden">
        <Image
          src="/images/ctabg.png"
          alt="Əlaqə arxa fon"
          width={1920}
          height={600}
          priority
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgb(58,42,31)]/60 z-10" />

        <Container>
          <div className="relative z-20 text-center text-[#F3E8D2] p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Bizimlə Əlaqə
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[#F3E8D2]/90">
              Xəyalınızdakı dizaynı gerçəkləşdirmək üçün buradayıq.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-[#FAF7F2]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[rgb(58,42,31)]">
              Sualınız Var?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <Card className="shadow-lg hover:shadow-xl transition-shadow flex flex-col border-stone-200">
                <CardHeader className="items-center text-center">
                  <div className="flex items-center justify-center w-full rounded-full mb-4">
                    <Image
                      src="/images/whatsapp.png"
                      alt="WhatsApp Icon"
                      width={32}
                      height={32}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl text-[rgb(58,42,31)]">WhatsApp ilə Sifariş</CardTitle>
                  <CardDescription className="text-stone-600">
                    Xüsusi dizaynlar, xonça və hədiyyələr üçün bizə birbaşa yazın.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-end">
                  <Button
                    size="lg"
                    className="w-full bg-[rgb(58,42,31)] text-[#F3E8D2] text-base py-6 hover:bg-[rgb(58,42,31)]/90"
                    onClick={handleWhatsAppRedirect}
                  >
                    Söhbətə Başlayın
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow flex flex-col border-stone-200">
                <CardHeader className="items-center text-center">
                  <div className="flex items-center justify-center w-full rounded-full mb-4">
                    <Image
                      src="/images/instagram.png"
                      alt="Instagram Icon"
                      width={32}
                      height={32}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl text-[rgb(58,42,31)]">Instagram-da İzləyin</CardTitle>
                  <CardDescription className="text-stone-600">
                    Ən son işlərimizi görmək, ilham almaq və ya DM vasitəsilə yazmaq üçün.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-end">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#D4A85F] text-[rgb(58,42,31)] text-base py-6 hover:bg-[#D4A85F]/90"
                  >
                    <Link
                      href="#" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bizi İzləyin
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