// components/navigation/header.tsx

"use client";

import Link from "next/link";
import LanguageSelector from "../shared/language-selector";
import { navigationItems } from "@/utils/static";
import Container from "../shared/container";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MobileMenu } from "./mobilmenu";

export function Header() {
  const t = useTranslations("navigation");
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-6">
      <Container>
        <div
          className="flex items-center justify-between rounded-full
                       border border-white/10 bg-[linear-gradient(to_right,#2c536480,#203a4380,#0f202780)] px-4 md:px-8 py-1 md:py-3 shadow-lg backdrop-blur-xl"
        >
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="logo"
              width={130}
              height={130}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-[90px]">
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium text-gray-300 navA hover:text-white transition-colors py-2 px-4 ${
                    pathname === item.href ? "text-white font-semibold" : ""
                  }`}
                >
                  {t(item.label)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <LanguageSelector />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}