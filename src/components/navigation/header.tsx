"use client";

import Link from "next/link";
import LanguageSelector from "../shared/language-selector";
import { navigationItems } from "@/utils/static";
import Container from "../shared/container";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MobileMenu } from "./mobilmenu"; 
import { ShoppingCart } from "lucide-react";

import { useCart } from "@/context/CartContext";

export function Header() {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  
  const { totalItemCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-6">
      <Container>
        
        <div
          className="
            flex items-center justify-between rounded-full
            border border-[rgba(212,168,95,0.25)]
            bg-[rgba(58,42,31,0.55)]
            px-4 md:px-8 py-1 md:py-3 
            shadow-[0_4px_25px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
          "
        >
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="logo"
              width={130}
              height={130}
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    font-medium text-[#F3E8D2] px-4 py-2 navA
                    hover:text-[#D4A85F] transition-colors
                    ${pathname === item.href ? "text-[#D4A85F] font-semibold" : ""}
                  `}
                >
                  {t(item.label)}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1 md:gap-2">
              
              {/* Language */}
              <LanguageSelector />

              {/* Cart Icon */}
              <Link href="/basket" className="relative">
                <ShoppingCart className="text-[#F3E8D2] hover:text-[#D4A85F] transition-colors h-6 w-6" />
                
                {totalItemCount > 0 && (
                  <span className="
                    absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center 
                    rounded-full bg-red-600 text-xs font-bold text-white
                  ">
                    {totalItemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu */}
              <MobileMenu />
            </div>

          </div>

        </div>

      </Container>
    </header>
  );
}
