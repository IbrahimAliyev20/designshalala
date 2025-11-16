import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles, HandHeart } from "lucide-react";
import Container from "@/components/shared/container";
// DƏYİŞİKLİK: Qara RainbowButton əvəzinə standart Button komponentimizi import edirik
import { Button } from "@/components/ui/button";

// --- Brend Palitrası (Referans üçün) ---
// Tünd Qəhvəyi (Əsas): rgb(58, 42, 31)
// Krem (Mətn): #F3E8D2
// Qızılı (Vurğu): #D4A85F
// İsti Bej (Fon): #FAF7F2
// İsti Boz (Mətn): text-stone-700
// ----------------------------------------

export default function AboutPage() {
  return (
    // DƏYİŞİKLİK: Əsas fon ağ, əsas mətn isti boz oldu
    <div className="bg-white text-stone-700">
      
      {/* === 1. HERO BÖLMƏSİ (Başlıq) === */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center pt-20">
        <Image
          src="/images/ctabg.png"
          alt="Haqqımızda arxa fon"
          width={1920}
          height={1080}
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        {/* DƏYİŞİKLİK: Qara overlay əvəzinə brendin isti qəhvəyi overlay-i */}
        <div className="absolute inset-0 bg-[rgb(58,42,31)]/60 z-10" />

        <Container>
          {/* DƏYİŞİKLİK: Mətn rəngləri ağ yox, krem oldu */}
          <div className="relative z-20 text-center text-[#F3E8D2] p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hər Anı Xüsusi Edirik
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[#F3E8D2]/90">
              Zərif toxunuşlar, əl işi dizaynlar və unudulmaz anlar.
            </p>
          </div>
        </Container>
      </section>

      {/* === 2. BİZİM HEKAYƏMİZ === */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* DƏYİŞİKLİK: Bütün 'text-gray-900' və 'text-gray-700' rəngləri brend rəngləri ilə əvəz edildi */}
            <div className="text-base md:text-lg text-stone-700 space-y-4 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(58,42,31)]">
                Bir Hədiyyədən Daha Artığı
              </h2>
              <p>
                Designed Shalala standart məhsullar satan bir mağaza deyil. 
                Bura, sənətkarlığın və zərifliyin hər bir detala həkk edildiyi bir emalatxanadır.
              </p>
              <p>
                Bizim üçün hər bir xonça sadəcə bir əşya deyil; o, sizin ən xüsusi
                gününüzə göstərilən diqqətin bir parçasıdır. Hər gül buketi duyğularınızı,
                hər şokolad qutusu isə ən şirin anlarınızı təmsil edir.
              </p>
              <p className="font-semibold text-[rgb(58,42,31)] pt-2">
                Çünki biz inanırıq ki, ən gözəl hədiyyələr xüsusi diqqət və həssaslıqla hazırlanır.
              </p>
            </div>
            
            <div className="relative w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/bgaboutsec.jpg" // Uyğun bir şəkil seçin
                alt="Əl işi prosesi"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24  ">
        <Container>
          {/* DƏYİŞİKLİK: Başlıq rəngi brendə uyğun oldu */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[rgb(58,42,31)]">
            Zərifliyə Gedən Yol
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* === KART 1 === */}
            {/* DƏYİŞİKLİK: Bütün mavi və boz rənglər brend rəngləri ilə əvəz edildi */}
            <div className="flex flex-col items-center p-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A85F]/20 text-[rgb(58,42,31)] mb-4">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(58,42,31)]">1. Fərdi Dizayn</h3>
              <p className="text-stone-700">
                Sizin xəyallarınızı dinləyir və hər bir detal üçün
                xüsusi bir dizayn konsepsiyası yaradırıq.
              </p>
            </div>

            {/* === KART 2 === */}
            {/* DƏYİŞİKLİK: Bütün mavi və boz rənglər brend rəngləri ilə əvəz edildi */}
            <div className="flex flex-col items-center p-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A85F]/20 text-[rgb(58,42,31)] mb-4">
                <HandHeart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(58,42,31)]">2. Sevgi ilə Hazırlıq</h3>
              <p className="text-stone-700">
                Hər bir kompozisiya yüksək keyfiyyətli materiallarla,
                diqqət və sevgi ilə əl ilə hazırlanır.
              </p>
            </div>

            {/* === KART 3 === */}
            {/* DƏYİŞİKLİK: Bütün mavi və boz rənglər brend rəngləri ilə əvəz edildi */}
            <div className="flex flex-col items-center p-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A85F]/20 text-[rgb(58,42,31)] mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(58,42,31)]">3. Zərif Təqdimat</h3>
              <p className="text-stone-700">
                Sifarişiniz tam arzuladığınız kimi, ən xırda
                detalına qədər mükəmməl şəkildə sizə təqdim olunur.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* === 4. ƏLAQƏYƏ ÇAĞIRIŞ (CTA) === */}
      <section className="py-16 md:py-24 text-center">
        <Container>
          {/* DƏYİŞİKLİK: Başlıq və mətn rəngləri brendə uyğun oldu */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[rgb(58,42,31)]">
            Sizin Xüsusi Gününüzü Birlikdə Planlayaq
          </h2>
          <p className="text-lg text-stone-700 mb-8 max-w-2xl mx-auto">
            İstər xonça, istər gül, istərsə də xüsusi hədiyyə olsun, bizə güvənə
            bilərsiniz.
          </p>
          
          {/* DƏYİŞİKLİK: Qara RainbowButton əvəzinə brendimizin əsas tünd qəhvəyi düyməsi */}
          <Button 
            asChild
            size="lg" // Button komponentində "size" istifadə olunur
            className="py-6 px-8 text-lg
                       bg-[rgb(58,42,31)] text-[#F3E8D2] font-semibold
                       hover:bg-[rgb(58,42,31)]/90 transition-colors"
          >
            <Link href="/contact">İndi Əlaqə Saxlayın</Link>
          </Button>
        </Container>
      </section>
    </div>
  );
}