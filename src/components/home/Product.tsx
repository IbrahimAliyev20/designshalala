"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import products, { ProductCategory } from "@/utils/product";
import { CardProduct } from "../shared/CardProduct";
import Container from "../shared/container";

export function Product() {
  const categories: ProductCategory[] = ["Xonçalar", "Gül", "Şokolad"];
  const allProducts = products;

  // --- Brend Palitrası (Referans üçün) ---
  // Tünd Qəhvəyi: rgb(58, 42, 31)
  // Krem: #F3E8D2
  // Qızılı: #D4A85F
  // İsti Boz (Mətn): text-stone-700
  // İsti Açıq Boz (Mətn): text-stone-500
  // ----------------------------------------

  return (
    <section className="py-12">
      <Container>
        <Tabs defaultValue="Hamısı" className="w-full">
          {/* DƏYİŞİKLİK: 'border-gray-200' -> 'border-stone-200' (daha isti) */}
          <TabsList className="w-full md:w-[60%] flex justify-start items-center gap-4 md:gap-8 bg-transparent border-b border-stone-200 rounded-none p-0 h-auto mb-12 overflow-x-auto">
            
            {/* === "HAMISI" TABI === */}
            <TabsTrigger
              value="Hamısı"
              className="group bg-transparent rounded-none border-b-2 border-transparent pb-4 px-2
                         text-sm md:text-base font-medium text-stone-500 
                         data-[state=active]:text-[rgb(58,42,31)] data-[state=active]:border-b-[rgb(58,42,31)] 
                         data-[state=active]:shadow-none data-[state=active]:bg-transparent
                         hover:text-[rgb(58,42,31)] transition-colors duration-200 whitespace-nowrap"
            >
              <span className="flex items-center gap-2">
                Hamısı
                <span
                  className="items-center justify-center min-w-[20px] h-5 px-1.5 
                             text-xs font-semibold rounded
                             bg-[#D4A85F]/20 text-[rgb(58,42,31)] 
                             hidden 
                             group-data-[state=active]:bg-[rgb(58,42,31)] 
                             group-data-[state=active]:text-[#F3E8D2]
                             group-data-[state=active]:inline-flex"
                >
                  {allProducts.length}
                </span>
              </span>
            </TabsTrigger>

            {/* === KATEQORİYA TABLARI === */}
            {categories.map((category) => {
              const categoryCount = products.filter(
                (p) => p.category === category
              ).length;

              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  // DƏYİŞİKLİK: Bütün rənglər brendə uyğunlaşdırıldı (mavi və qara yığışdırıldı)
                  className="group bg-transparent rounded-none border-b-2 border-transparent pb-4 px-2
                                     text-sm md:text-base font-medium text-stone-500 
                                     data-[state=active]:text-[rgb(58,42,31)] data-[state=active]:border-b-[rgb(58,42,31)] 
                                     data-[state=active]:shadow-none data-[state=active]:bg-transparent
                                     hover:text-[rgb(58,42,31)] transition-colors duration-200 whitespace-nowrap"
                >
                  <span className="flex items-center gap-2">
                    {category}
                    <span
                      className="items-center justify-center min-w-[20px] h-5 px-1.5 
                                 text-xs font-semibold rounded
                                 bg-[#D4A85F]/20 text-[rgb(58,42,31)] 
                                 hidden 
                                 group-data-[state=active]:bg-[rgb(58,42,31)] 
                                 group-data-[state=active]:text-[#F3E8D2]
                                 group-data-[state=active]:inline-flex"
                    >
                      {categoryCount}
                    </span>
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Məzmun (Bura dəyməyə ehtiyac yoxdur, çünki 'CardProduct' onsuz da düzəldilib) */}
          <TabsContent value="Hamısı" className="mt-0">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-6">
              {allProducts.map((product) => (
                <CardProduct key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-6">
                {products
                  .filter((p) => p.category === category)
                  .map((product) => (
                    <CardProduct key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}