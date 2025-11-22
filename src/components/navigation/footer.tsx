"use client";

import { Instagram } from "lucide-react";
import Container from "../shared/container";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("navigation");
  const tCommon = useTranslations("common");

  return (
    <footer className="bg-neutral-50 text-gray-700 border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-center pt-6 pb-5">
          <Link href="/" className="mb-4 block">
            <Image
              src="/images/logo1.png"
              alt={tCommon("logo_alt")}
              width={170}
              height={140}
              className="h-20 w-auto"
            />
          </Link>
          
          <nav className="my-6">
            <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  {tNav("product")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  {tNav("contact")}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex space-x-4 mb-8">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6" />
            </Link>
          </div>

          <div className="w-full border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
