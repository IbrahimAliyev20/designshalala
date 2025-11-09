import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles, HandHeart } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center pt-20">
        <Image
          src="/images/ctabg.png"
          alt="Haqqımızda arxa fon"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-40"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hər Anı Xüsusi Edirik
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Zərif toxunuşlar, əl işi dizaynlar və unudulmaz anlar.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bizim Hekayəmiz
          </h2>
          <div className="text-base md:text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>
              Designed Shalala bir ehtirasdan, gözəlliyə olan sevgidən və ən
              xüsusi anları daha da mənalı etmək arzusundan yarandı. Biz hər bir
              kompozisiyanı bir sənət əsəri kimi görürük.
            </p>
            <p>
              Bizim üçün hər bir xonça, hər bir gül buketi və hər bir şokolad
              qutusu bir hekayə danışır. Bu, sadəcə bir hədiyyə deyil, bu, sizin
              duyğularınızın ən zərif ifadəsidir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Biz Necə İşləyirik?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. İdeya və Dizayn</h3>
              <p className="text-gray-600">
                Sizin xəyallarınızı dinləyir və hər bir detal üçün xüsusi bir
                dizayn konsepsiyası yaradırıq.
              </p>
            </div>

            <div className="flex flex-col items-center p-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <HandHeart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Əl İşləməsi</h3>
              <p className="text-gray-600">
                Hər bir kompozisiya yüksək keyfiyyətli materiallarla, böyük
                diqqət və sevgi ilə əl ilə hazırlanır.
              </p>
            </div>

            <div className="flex flex-col items-center p-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Mükəmməl Nəticə</h3>
              <p className="text-gray-600">
                Sifarişiniz tam arzuladığınız kimi, ən xırda detalına qədər
                mükəmməl şəkildə sizə təqdim olunur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sizin Xüsusi Gününüzü Birlikdə Planlayaq
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            İstər xonça, istər gül, istərsə də xüsusi hədiyyə olsun, bizə güvənə
            bilərsiniz.
          </p>
          <RainbowButton variant="default" className="py-6 px-8 text-lg">
            <Link href="/contact">İndi Əlaqə Saxlayın</Link>
          </RainbowButton>
        </div>
      </section>
    </div>
  );
}
