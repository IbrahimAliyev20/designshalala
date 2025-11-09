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

export default function ContactPage() {
  const handleWhatsAppRedirect = () => {
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
    <div className="bg-white text-gray-900">
      
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center pt-20 overflow-hidden">
        <Image
          src="/images/ctabg.png"
          alt="Əlaqə arxa fon"
          width={1920} // DƏYİŞİKLİK
          height={600} // DƏYİŞİKLİK
          priority
          // DƏYİŞİKLİK: layout="fill" silindi, w-full h-full object-cover əlavə edildi
          className="absolute inset-0 z-0 opacity-40 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />

        <Container>
          <div className="relative z-20 text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Bizimlə Əlaqə
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              Xəyalınızdakı dizaynı gerçəkləşdirmək üçün buradayıq.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Sualınız Var?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1: WhatsApp (Şəkil İkonu ilə) */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader className="items-center text-center">
                  {/* İkon şəkli (dəyişiklik yoxdur, onsuz da düzgün idi) */}
                  <div className="flex items-center justify-center w-full rounded-full  mb-4">
                    <Image
                      src="/images/whatsapp.png"
                      alt="WhatsApp Icon"
                      width={32}
                      height={32}
                      className="w-12 h-12 object-contain" // Sizin istədiyiniz kimi
                    />
                  </div>
                  <CardTitle className="text-2xl">WhatsApp ilə Sifariş</CardTitle>
                  <CardDescription>
                    Xüsusi dizaynlar, xonça və hədiyyələr üçün bizə birbaşa yazın.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-end">
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-base py-6"
                    onClick={handleWhatsAppRedirect}
                  >
                    Söhbətə Başlayın
                  </Button>
                </CardContent>
              </Card>

              {/* Card 2: Instagram (Şəkil İkonu ilə) */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader className="items-center text-center">
                  <div className="flex items-center justify-center w-full  rounded-full  mb-4">
                    <Image
                      src="/images/instagram.png"
                      alt="Instagram Icon"
                      width={32}
                      height={32}
                      className="w-12 h-12 object-contain" // Sizin istədiyiniz kimi
                    />
                  </div>
                  <CardTitle className="text-2xl">Instagram-da İzləyin</CardTitle>
                  <CardDescription>
                    Ən son işlərimizi görmək, ilham almaq və ya DM vasitəsilə yazmaq üçün.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-end">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-base py-6"
                  >
                    <Link
                      href="#" // <--- BURA ÖZ INSTAGRAM LİNKİNİZİ YAZIN
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