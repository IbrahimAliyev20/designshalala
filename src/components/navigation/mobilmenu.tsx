"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { navigationItems } from "@/utils/static";
import Image from "next/image";
import { ShimmerButton } from "../ui/shimmer-button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Trigger Button */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-transparent"
        >
          <Menu className="h-7 w-7 hover:scale-110 transition-transform duration-300" />
          <span className="sr-only">{tCommon("toggle_menu")}</span>
        </Button>
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent
        side="right"
        className="w-[70%] sm:w-[55%] md:hidden
          bg-black/60 backdrop-blur-xl border-l border-white/10
          text-white flex flex-col justify-between overflow-y-auto shadow-2xl"
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-white/10">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo1.png"
              alt={tCommon("logo_alt")}
              width={130}
              height={130}
              className="h-9 w-auto rounded-md hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-6 py-6">
          <ul className="space-y-3">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-lg text-gray-300 
                    hover:text-white hover:bg-white/10 transition-all duration-300
                    hover:translate-x-2"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="px-6 py-6 border-t border-white/10">
          <Link href="/contact" onClick={() => setOpen(false)}>
            <ShimmerButton className="shadow-2xl pointer-events-auto z-20 w-full">
              <span className="text-center px-10 text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-xl dark:from-white dark:to-slate-900/10">
                {t("contact")}
              </span>
            </ShimmerButton>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
