import Link from "next/link";
import { Instagram } from "lucide-react"; // Yalnız Instagram saxlayırıq
import Container from "../shared/container";
import Image from "next/image"; // Image komponentini əlavə edirik

export function Footer() {
  return (
    // DƏYİŞİKLİK: Fonu qara, mətni açıq rəng etdik
    <footer className="bg-black text-gray-300">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-14 pb-10">
          
          {/* Sütun 1: Logo və Qısa Mətn */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 block">
              {/* DƏYİŞİKLİK: Sizin loqonuz */}
              <Image
                src="/images/logo.jpg"
                alt="Designed Shalala Logo"
                width={140}
                height={140}
                className="h-10 w-auto" // Ölçünü header ilə uyğunlaşdırdım
              />
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              Hər anı zərif toxunuşlarla xüsusi edin.
            </p>
          </div>

          {/* Sütun 2: Keçidlər (Kateqoriyalar) */}
          <div>
            <h3 className="font-semibold text-white mb-4">Məhsullar</h3>
            <ul className="space-y-3">
              {/* DƏYİŞİKLİK: Linkləri layihənizə uyğunlaşdırdım */}
              <li>
                <Link
                  href="/products?category=Xonçalar" // Bu linkləri öz routinqinizə uyğunlaşdırın
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Xonçalar
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Gül"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gül
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Şokolad"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Şokolad
                </Link>
              </li>
            </ul>
          </div>

          {/* Sütun 3: Sosial Media və Əlaqə */}
          <div>
            <h3 className="font-semibold text-white mb-4">Bizi İzləyin</h3>
            <div className="flex space-x-4 mb-6">
              {/* DƏYİŞİKLİK: Yalnız Instagram */}
              <Link
                href="#" // Bura öz Instagram linkinizi qoyun
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            
            <h3 className="font-semibold text-white mb-4 mt-6">Əlaqə</h3>
            <Link
                href="/contact" // Əlaqə səhifənizə link
                className="text-gray-400 hover:text-white transition-colors"
              >
                Bizimlə əlaqə saxlayın
            </Link>
          </div>
        </div>

        {/* Alt Hissə: Copyright */}
        <div className="mt-12 py-6 text-center border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Designed Shalala. Bütün hüquqlar qorunur.
          </p>
        </div>
      </Container>
    </footer>
  );
}