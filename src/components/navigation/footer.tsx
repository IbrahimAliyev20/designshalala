import Link from "next/link";
import { Instagram } from "lucide-react";
import Container from "../shared/container";
import Image from "next/image";

export function Footer() {
  return (
    // DƏYİŞİKLİK: Açıq rəngli, zərif fon
    <footer className="bg-neutral-50 text-gray-700 border-t border-gray-200">
      <Container>
        {/* DƏYİŞİKLİK: Mərkəzləşdirilmiş düzülüş */}
        <div className="flex flex-col items-center pt-6 pb-5">
          
          {/* 1. Logo */}
          <Link href="/" className="mb-4 block">
            <Image
              src="/images/logo.jpg"
              alt="Designed Shalala Logo"
              width={170}
              height={140}
              className="h-10 w-auto"
            />
          </Link>
          
          {/* 2. Əsas Keçidlər (Mobildə alt-alta, Desktopda yan-yana) */}
          <nav className="my-6">
            <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
           

           
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  Məhsullar
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  Əlaqə
                </Link>
              </li>
            </ul>
          </nav>

          {/* 3. Sosial Media İkonu */}
          <div className="flex space-x-4 mb-8">
            <Link
              href="#" // Bura öz Instagram linkinizi qoyun
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6" />
            </Link>
          </div>

          {/* 4. Copyright (Ayırıcı xətt ilə) */}
          <div className="w-full border-t border-gray-200  text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Designed Shalala. Bütün hüquqlar qorunur.
            </p>
          </div>

        </div>
      </Container>
    </footer>
  );
}