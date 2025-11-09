import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { QueryProvider } from "@/providers/QueryProvider";
import { Toaster } from "sonner";

import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Designed Shalala - Zərif Toxunuşlar",
  description: "Xonçalar, Gül və Şokolad kompozisiyaları",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = (await getMessages()) as Record<string, string>;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>
            <CartProvider>
              <div className="bg-red-100/10">
                <Header />
                {children}
                <Footer />
              </div>
              <Toaster position="top-center" richColors closeButton />
            </CartProvider>
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}